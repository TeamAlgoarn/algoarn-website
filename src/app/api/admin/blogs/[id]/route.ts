import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

type RouteContext<T> = {
  params: Promise<T>;
};

export async function PATCH(
  req: NextRequest,
  { params }: RouteContext<{ id: string }>
) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "supabaseAdmin not initialized (check env vars)" },
        { status: 500 }
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Missing id in route params" }, { status: 400 });
    }

    const body = await req.json();

    // const updateData: Record<string, any> = {
    //   title: body.title ?? null,
    //   slug: body.slug ?? null,
    //   excerpt: body.excerpt ?? null,
    //   content: body.content ?? null,
    //   category: body.category ?? null,
    //   author: body.author ?? null,
    //   date: body.date ?? undefined, 
    //   read_time: body.read_time ?? body.readTime ?? null,
    //   published: typeof body.published === "boolean" ? body.published : undefined,
    //   updated_at: new Date().toISOString(),
    // };

    // remove undefined keys so we don't overwrite unintentionally
    // Object.keys(updateData).forEach((k) => updateData[k] === undefined && delete updateData[k]);
const updateData: Record<string, any> = {
  updated_at: new Date().toISOString(),
};

// only set fields if they are provided in the PATCH body
if ("title" in body) updateData.title = body.title;
if ("slug" in body) updateData.slug = body.slug;
if ("excerpt" in body) updateData.excerpt = body.excerpt;
if ("content" in body) updateData.content = body.content;
if ("category" in body) updateData.category = body.category;
if ("author" in body) updateData.author = body.author;
if ("date" in body) updateData.date = body.date;
if ("read_time" in body) updateData.read_time = body.read_time;
if ("readTime" in body) updateData.read_time = body.readTime;
if ("published" in body) updateData.published = body.published;

// optional: prevent empty patch
if (Object.keys(updateData).length === 1) {
  return NextResponse.json({ error: "No valid fields to update" }, { status: 400 });
}
    const { data, error } = await supabaseAdmin
      .from("blogs")
      .update(updateData)
      .eq("id", id)
      .select("*"); // ✅ DO NOT use .single()

    if (error) {
      console.error("BLOGS PATCH ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "No blog found with this id" }, { status: 404 });
    }

    if (data.length > 1) {
      return NextResponse.json(
        { error: "Multiple rows updated (id should be unique)" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: data[0] });
  } catch (e: any) {
    console.error("BLOGS PATCH UNCAUGHT:", e);
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: RouteContext<{ id: string }>
) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "supabaseAdmin not initialized (check env vars)" },
        { status: 500 }
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json({ error: "Missing id in route params" }, { status: 400 });
    }

    const { error } = await supabaseAdmin.from("blogs").delete().eq("id", id);

    if (error) {
      console.error("BLOGS DELETE ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("BLOGS DELETE UNCAUGHT:", e);
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}

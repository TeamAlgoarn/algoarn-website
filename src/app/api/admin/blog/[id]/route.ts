import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
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

    const updateData: Record<string, any> = {
      title: body.title ?? null,
      slug: body.slug ?? null,
      excerpt: body.excerpt ?? null,
      content: body.content ?? null,
      category: body.category ?? null,
      author: body.author ?? null,
      date: body.date ?? undefined, // ✅ add date support if you send it
      read_time: body.read_time ?? body.readTime ?? null,
      published: typeof body.published === "boolean" ? body.published : undefined,
      updated_at: new Date().toISOString(),
    };

    // remove undefined keys so we don't overwrite unintentionally
    Object.keys(updateData).forEach((k) => updateData[k] === undefined && delete updateData[k]);

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

export async function DELETE(_req: Request, { params }: Ctx) {
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

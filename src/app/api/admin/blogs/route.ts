import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "supabaseAdmin not initialized (check env vars)" },
        { status: 500 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("BLOGS GET ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (e: any) {
    console.error("BLOGS GET UNCAUGHT:", e);
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "supabaseAdmin not initialized (check env vars)" },
        { status: 500 }
      );
    }

    const body = await req.json();

    const payload = {
      title: body.title ?? null,
      slug: body.slug ?? null,
      excerpt: body.excerpt ?? null,
      content: body.content ?? null,
      category: body.category ?? null,
      author: body.author ?? "Algoarn Team",
      read_time: body.read_time ?? body.readTime ?? "5 min read",
      published: !!body.published,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabaseAdmin
      .from("blogs")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      console.error("BLOGS POST ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (e: any) {
    console.error("BLOGS POST UNCAUGHT:", e);
    return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
  }
}



// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { supabaseAdmin } from "@/lib/supabase";

// async function requireAdmin() {
//   const token = (await cookies()).get("admin_token")?.value;
//   if (!token) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }
//   return null; // ok
// }

// export async function GET() {
//   const auth = await requireAdmin();
//   if (auth) return auth;

//   try {
//     if (!supabaseAdmin) {
//       return NextResponse.json(
//         { error: "supabaseAdmin not initialized (check env vars)" },
//         { status: 500 }
//       );
//     }

//     const { data, error } = await supabaseAdmin
//       .from("blogs")
//       .select("*")
//       .order("created_at", { ascending: false });

//     if (error) {
//       console.error("BLOGS GET ERROR:", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ data });
//   } catch (e: any) {
//     console.error("BLOGS GET UNCAUGHT:", e);
//     return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
//   }
// }

// export async function POST(req: Request) {
//   const auth = await requireAdmin();
//   if (auth) return auth;

//   try {
//     if (!supabaseAdmin) {
//       return NextResponse.json(
//         { error: "supabaseAdmin not initialized (check env vars)" },
//         { status: 500 }
//       );
//     }

//     const body = await req.json();

//     // ✅ recommended: enforce required fields (title etc.)
//     if (!body.title || !body.slug || !body.excerpt || !body.content) {
//       return NextResponse.json(
//         { error: "Missing required fields (title, slug, excerpt, content)" },
//         { status: 400 }
//       );
//     }

//     const payload = {
//       title: body.title,              // <- don't default to null if required
//       slug: body.slug,
//       excerpt: body.excerpt,
//       content: body.content,
//       category: body.category ?? null,
//       author: body.author ?? "Algoarn Team",
//       read_time: body.read_time ?? body.readTime ?? "5 min read",
//       published: !!body.published,
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     };

//     const { data, error } = await supabaseAdmin
//       .from("blogs")
//       .insert(payload)
//       .select("*")
//       .single();

//     if (error) {
//       console.error("BLOGS POST ERROR:", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ data }, { status: 201 });
//   } catch (e: any) {
//     console.error("BLOGS POST UNCAUGHT:", e);
//     return NextResponse.json({ error: e?.message || "Server error" }, { status: 500 });
//   }
// }

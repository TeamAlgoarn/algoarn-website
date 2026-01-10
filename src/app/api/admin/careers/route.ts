// import { NextResponse } from "next/server";
// import { supabaseAdmin } from "@/lib/supabase";

// export async function GET() {
//   if (!supabaseAdmin) {
//     return NextResponse.json(
//       { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
//       { status: 500 }
//     );
//   }

//   const { data, error } = await supabaseAdmin
//     .from("careers")
//     .select("*")
//     .order("created_at", { ascending: false });

//   if (error) return NextResponse.json({ error: error.message }, { status: 500 });
//   return NextResponse.json({ data });
// }

// export async function POST(req: Request) {
//   if (!supabaseAdmin) {
//     return NextResponse.json(
//       { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
//       { status: 500 }
//     );
//   }

//   try {
//     const body = await req.json();

//     const payload = {
//       job_id: body.job_id ?? null,
//       title: body.title ?? null,
//       location: body.location ?? null,
//       type: body.type ?? null,
//       description: body.description ?? null,
//       requirements: Array.isArray(body.requirements) ? body.requirements : [],
//       tags: Array.isArray(body.tags) ? body.tagss : [],
//       published: !!body.published,
//       updated_at: new Date().toISOString(),
//     };

//     const { data, error } = await supabaseAdmin
//       .from("careers")
//       .insert(payload)
//       .select("*")
//       .single();

//     if (error) return NextResponse.json({ error: error.message }, { status: 500 });
//     return NextResponse.json({ data });
//   } catch (e: any) {
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
      { status: 500 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from("careers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function POST(req: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();

    const payload = {
      job_id: body.job_id ?? null,
      title: body.title ?? null,

      // ✅ REQUIRED NOT NULL COLUMNS (fallbacks prevent DB errors)
      team: body.team ?? "Engineering",
      short: body.short ?? body.title ?? "Role summary",

      location: body.location ?? null,
      type: body.type ?? null,
      description: body.description ?? null,

      requirements: Array.isArray(body.requirements) ? body.requirements : [],
      tags: Array.isArray(body.tags) ? body.tags : [], // ✅ FIXED (was tagss)

      published: typeof body.published === "boolean" ? body.published : true,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabaseAdmin
      .from("careers")
      .insert(payload)
      .select("*")
      .single();

    if (error) {
      console.error("CAREERS POST ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (e: any) {
    console.error("CAREERS POST EXCEPTION:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

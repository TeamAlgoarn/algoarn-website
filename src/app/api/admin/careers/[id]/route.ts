// // import { NextResponse } from "next/server";
// // import { supabaseAdmin } from "@/lib/supabase";

// // type Ctx = { params: { id: string } };

// // export async function PATCH(req: Request, { params }: Ctx) {
// //   if (!supabaseAdmin) {
// //     return NextResponse.json(
// //       { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
// //       { status: 500 }
// //     );
// //   }

// //   try {
// //     const { id } = params;
// //     const body = await req.json();

// //     const updateData: Record<string, any> = {
// //       updated_at: new Date().toISOString(),
// //     };

// //     if (body.job_id !== undefined) updateData.job_id = body.job_id;
// //     if (body.title !== undefined) updateData.title = body.title;
// //     if (body.location !== undefined) updateData.location = body.location;
// //     if (body.type !== undefined) updateData.type = body.type;
// //     if (body.description !== undefined) updateData.description = body.description;

// //     if (body.tags !== undefined)
// //       updateData.tags = Array.isArray(body.tags) ? body.tags : [];

// //     if (body.requirements !== undefined)
// //       updateData.requirements = Array.isArray(body.requirements) ? body.requirements : [];

// //     if (body.published !== undefined) updateData.published = !!body.published;

// //     const { data, error } = await supabaseAdmin
// //       .from("careers")
// //       .update(updateData)
// //       .eq("id", id)
// //       .select("*")
// //       .single();

// //     if (error) {
// //       console.error("CAREERS PATCH ERROR:", error);
// //       return NextResponse.json({ error: error.message }, { status: 500 });
// //     }

// //     return NextResponse.json({ data });
// //   } catch (e: any) {
// //     console.error("CAREERS PATCH EXCEPTION:", e);
// //     return NextResponse.json({ error: e.message }, { status: 500 });
// //   }
// // }

// // export async function DELETE(_: Request, { params }: Ctx) {
// //   if (!supabaseAdmin) {
// //     return NextResponse.json(
// //       { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
// //       { status: 500 }
// //     );
// //   }

// //   try {
// //     const { id } = params;

// //     const { error } = await supabaseAdmin.from("careers").delete().eq("id", id);

// //     if (error) {
// //       console.error("CAREERS DELETE ERROR:", error);
// //       return NextResponse.json({ error: error.message }, { status: 500 });
// //     }

// //     return NextResponse.json({ ok: true });
// //   } catch (e: any) {
// //     console.error("CAREERS DELETE EXCEPTION:", e);
// //     return NextResponse.json({ error: e.message }, { status: 500 });
// //   }
// // }

// import { NextResponse } from "next/server";
// import { supabaseAdmin } from "@/lib/supabase";

// function getIdFromUrl(req: Request) {
//   // /api/admin/careers/<id>
//   const pathname = new URL(req.url).pathname;
//   const parts = pathname.split("/");
//   return parts[parts.length - 1] || "";
// }

// export async function PATCH(req: Request) {
//   if (!supabaseAdmin) {
//     return NextResponse.json(
//       { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
//       { status: 500 }
//     );
//   }

//   const id = getIdFromUrl(req);

//   if (!id) {
//     return NextResponse.json({ error: "Missing id in URL" }, { status: 400 });
//   }

//   try {
//     const body = await req.json();

//     const updateData: Record<string, any> = {
//       updated_at: new Date().toISOString(),
//     };

//     if (body.job_id !== undefined) updateData.job_id = body.job_id ?? null;
//     if (body.title !== undefined) updateData.title = body.title ?? null;
//     if (body.location !== undefined) updateData.location = body.location ?? null;
//     if (body.type !== undefined) updateData.type = body.type ?? null;
//     if (body.description !== undefined) updateData.description = body.description ?? null;

//     if (body.tags !== undefined)
//       updateData.tags = Array.isArray(body.tags) ? body.tags : [];

//     if (body.requirements !== undefined)
//       updateData.requirements = Array.isArray(body.requirements) ? body.requirements : [];

//     if (body.published !== undefined) updateData.published = !!body.published;

//     const { data, error } = await supabaseAdmin
//       .from("careers")
//       .update(updateData)
//       .eq("id", id)
//       .select("*")
//       .single();

//     if (error) {
//       console.error("CAREERS PATCH ERROR:", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ data });
//   } catch (e: any) {
//     console.error("CAREERS PATCH EXCEPTION:", e);
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }

// export async function DELETE(req: Request) {
//   if (!supabaseAdmin) {
//     return NextResponse.json(
//       { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
//       { status: 500 }
//     );
//   }

//   const id = getIdFromUrl(req);

//   if (!id) {
//     return NextResponse.json({ error: "Missing id in URL" }, { status: 400 });
//   }

//   try {
//     const { error } = await supabaseAdmin.from("careers").delete().eq("id", id);

//     if (error) {
//       console.error("CAREERS DELETE ERROR:", error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json({ ok: true });
//   } catch (e: any) {
//     console.error("CAREERS DELETE EXCEPTION:", e);
//     return NextResponse.json({ error: e.message }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function getIdFromUrl(req: Request) {
  const pathname = new URL(req.url).pathname;
  const parts = pathname.split("/");
  return parts[parts.length - 1] || "";
}

export async function PATCH(req: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
      { status: 500 }
    );
  }

  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: "Missing id in URL" }, { status: 400 });

  try {
    const body = await req.json();

    const updateData: Record<string, any> = {
      updated_at: new Date().toISOString(),
    };

    if (body.job_id !== undefined) updateData.job_id = body.job_id ?? null;
    if (body.title !== undefined) updateData.title = body.title ?? null;

    // ✅ REQUIRED NOT NULL COLUMNS (fallbacks prevent DB errors)
    if (body.team !== undefined) updateData.team = body.team ?? "Engineering";
    if (body.short !== undefined) updateData.short = body.short ?? body.title ?? "Role summary";

    if (body.location !== undefined) updateData.location = body.location ?? null;
    if (body.type !== undefined) updateData.type = body.type ?? null;
    if (body.description !== undefined) updateData.description = body.description ?? null;

    if (body.tags !== undefined) updateData.tags = Array.isArray(body.tags) ? body.tags : [];
    if (body.requirements !== undefined)
      updateData.requirements = Array.isArray(body.requirements) ? body.requirements : [];

    if (body.published !== undefined) updateData.published = !!body.published;

    const { data, error } = await supabaseAdmin
      .from("careers")
      .update(updateData)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      console.error("CAREERS PATCH ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (e: any) {
    console.error("CAREERS PATCH EXCEPTION:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "supabaseAdmin not initialized (check SUPABASE_SERVICE_ROLE_KEY)" },
      { status: 500 }
    );
  }

  const id = getIdFromUrl(req);
  if (!id) return NextResponse.json({ error: "Missing id in URL" }, { status: 400 });

  try {
    const { error } = await supabaseAdmin.from("careers").delete().eq("id", id);

    if (error) {
      console.error("CAREERS DELETE ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("CAREERS DELETE EXCEPTION:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

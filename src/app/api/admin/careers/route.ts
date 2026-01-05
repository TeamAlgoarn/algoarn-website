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
      location: body.location ?? null,
      type: body.type ?? null,
      description: body.description ?? null,
      requirements: Array.isArray(body.requirements) ? body.requirements : [],
      tags: Array.isArray(body.tags) ? body.tagss : [],
      published: !!body.published,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabaseAdmin
      .from("careers")
      .insert(payload)
      .select("*")
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ data });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

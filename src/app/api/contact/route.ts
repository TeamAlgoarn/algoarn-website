import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      organization,
      message,
      topic,
    } = await req.json();

    if (!name || !email || !message || !topic) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!supabaseAdmin) {
      console.error("supabaseAdmin is not configured");
      return NextResponse.json(
        { error: "Server configuration error (supabaseAdmin null)" },
        { status: 500 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("contact_messages")
      .insert({
        name,
        email,
        phone,
        organization,
        message,
        topic,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      // 👇 send Supabase error message back so we can see it in UI
      return NextResponse.json(
        { error: `Supabase error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: `Unexpected server error: ${String(err?.message || err)}` },
      { status: 500 }
    );
  }
}

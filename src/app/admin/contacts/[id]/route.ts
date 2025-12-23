import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase admin client not initialized" },
      { status: 500 }
    );
  }

  const { error } = await supabaseAdmin
    .from("contact_messages")
    .delete()
    .eq("id", params.id);

  if (error) {
    console.error("Supabase delete error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

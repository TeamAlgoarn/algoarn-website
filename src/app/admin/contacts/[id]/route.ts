import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

type RouteContext<T> = {
  params: Promise<T>;
};

export async function DELETE(
  _req: NextRequest,
  { params }: RouteContext<{ id: string }>
) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: "Supabase admin client not initialized" },
      { status: 500 }
    );
  }

  const { id } = await params;
  const { error } = await supabaseAdmin
    .from("contact_messages")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Supabase delete error:", error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

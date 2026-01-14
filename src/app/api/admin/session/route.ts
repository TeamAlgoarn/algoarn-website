// import { NextResponse } from "next/server";

// export async function POST() {
//   const res = NextResponse.json({ ok: true });

//   res.cookies.set("admin_token", "logged_in", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "lax",
//     path: "/",
//     maxAge: 60 * 60 * 24,
//   });

//   return res;
// }
// 

import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });

  res.cookies.set("admin_token", "logged_in", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    //  this is : no maxAge => cookie only for this browser session
  });

  return res;
}

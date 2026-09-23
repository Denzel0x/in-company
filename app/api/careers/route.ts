import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire this up to an email service (e.g. Resend, Postmark) or an ATS.
  console.log("Careers application received:", body);

  return NextResponse.json({ ok: true });
}

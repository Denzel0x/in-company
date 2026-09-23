import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !body.name || !body.email || !body.projectType || !body.description) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // TODO: wire this up to an email service (e.g. Resend, Postmark) or CRM.
  console.log("Start a Project submission received:", body);

  return NextResponse.json({ ok: true });
}

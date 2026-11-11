import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const subject = String(body?.subject ?? "").trim();
  const message = String(body?.message ?? "").trim();

  const errors = {};
  if (!name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (!subject) errors.subject = "Please add a subject.";
  if (message.length < 10) errors.message = "Please write at least 10 characters.";
  if (name.length > 100 || subject.length > 150 || message.length > 3000) {
    errors.message = "That message is too long.";
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: forward to your email provider (Resend, SendGrid…) or store in a database.
  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContact } from "@/lib/validateContact";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  company?: string; // honeypot
};

export async function POST(req: Request) {
  let body: ContactRequestBody;
  try {
    body = (await req.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  // Honeypot: pretend success to avoid leaking signal.
  if (typeof body.company === "string" && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const validated = validateContact({
    name: body.name,
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    message: body.message,
  });

  if (!validated.ok) {
    return NextResponse.json({ ok: false, error: validated.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { ok: false, error: "Server not configured." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: toEmail,
      replyTo: validated.data.email,
      subject: `New message from ${validated.data.name}`,
      text: [
        `Name: ${validated.data.name}`,
        `Email: ${validated.data.email}`,
        "",
        validated.data.message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 502 }
    );
  }
}

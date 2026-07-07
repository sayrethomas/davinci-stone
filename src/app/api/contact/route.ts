import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, projectType, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "DaVinci Stone <contact@davincistoneid.com>",
    to: "matth@davincistoneidaho.com",
    replyTo: email,
    subject: `New Contact Form: ${name}${projectType ? ` — ${projectType}` : ""}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

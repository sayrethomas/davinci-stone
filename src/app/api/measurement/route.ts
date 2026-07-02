import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    email,
    phone,
    address,
    projectType,
    material,
    estimatedSize,
    details,
    preferredDate,
    preferredTime,
    howHeard,
  } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: "DaVinci Stone <contact@davincistoneid.com>",
    to: "info@davincistoneidaho.com",
    replyTo: email,
    subject: `Measurement Request: ${name} — ${projectType || "General"}`,
    html: `
      <h2>New Measurement Request</h2>
      <h3>Contact Info</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Address:</strong> ${address || "Not provided"}</p>
      <h3>Project Details</h3>
      <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
      <p><strong>Material:</strong> ${material || "Not specified"}</p>
      <p><strong>Estimated Size:</strong> ${estimatedSize || "Not provided"}</p>
      <p><strong>Details:</strong> ${details || "None"}</p>
      <h3>Scheduling</h3>
      <p><strong>Preferred Date:</strong> ${preferredDate || "Flexible"}</p>
      <p><strong>Preferred Time:</strong> ${preferredTime || "Any time"}</p>
      <p><strong>How They Heard About Us:</strong> ${howHeard || "Not specified"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

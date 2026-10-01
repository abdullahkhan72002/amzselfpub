import { join } from "node:path";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { leadEmail } from "@/lib/lead-email";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    formName?: string;
    fields?: Record<string, unknown>;
    ppc?: Record<string, unknown>;
  };

  const fields = sanitize(body.fields);
  const ppc = sanitize(body.ppc);
  const email = String(fields.email || "");

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const to = process.env.LEAD_TO || "info@amzselfpub.com";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return NextResponse.json({ error: "Mail is not configured." }, { status: 500 });
  }

  const formName = body.formName || "Website form";
  const message = leadEmail({ formName, fields, ppc });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"AMZ Self Pub" <${user}>`,
    to,
    replyTo: email,
    subject: message.subject,
    text: message.text,
    html: message.html,
    attachments: [
      {
        filename: "logo.png",
        path: join(process.cwd(), "app/icon.png"),
        cid: "logo",
      },
    ],
  });

  return NextResponse.json({ ok: true });
}

function sanitize(input: Record<string, unknown> | undefined) {
  const output: Record<string, string> = {};
  if (!input) return output;

  for (const [key, value] of Object.entries(input)) {
    if (key === "consent") continue;
    if (typeof value === "string" && value.trim()) output[key] = value.trim();
  }

  return output;
}

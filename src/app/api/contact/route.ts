import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, service, message } = body;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: "Please provide your full name." }, { status: 400 });
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (!message || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Please tell us a little more about your project (10 characters minimum)." },
      { status: 400 },
    );
  }

  // No database is used for this project. In a production environment this is where
  // we would forward the enquiry to a CRM, email service, or notification channel.
  console.log("New UNAD contact enquiry:", {
    name,
    email,
    phone: phone ?? "",
    service: service ?? "General enquiry",
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: "Thanks for reaching out — a member of our team will be in touch within one business day.",
  });
}

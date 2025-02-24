import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, text } = await req.json();

    if (!name || !phone || !subject || !text) {
      return NextResponse.json({ success: false, message: "❌ All fields are required!" }, { status: 400 });
    }

    console.log("🚀 New Email Request:", { name, phone, subject, text });

    // ✅ Check Environment Variables
    if (!process.env.RESEND_API_KEY || !process.env.RECEIVER_EMAIL) {
      return NextResponse.json({ success: false, message: "❌ Email configuration error" }, { status: 500 });
    }

    // ✅ Setup Resend Client
    const resend = new Resend(process.env.RESEND_API_KEY);

    // ✅ Send Email using Resend
    const emailResponse = await resend.emails.send({
      from: "Rajkumar <noreply@yourdomain.com>", // ✅ Use your verified domain
      to: process.env.RECEIVER_EMAIL, // ✅ Fixed Receiver
      subject: `📩 New Message from ${name}`,
      text: `👤 Name: ${name}\n📞 Phone: ${phone}\n\n✉️ Message:\n${text}`,
    });

    console.log("✅ Email Sent Successfully:", emailResponse);
    return NextResponse.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error: any) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

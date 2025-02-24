import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, text } = await req.json();

    if (!name || !phone || !subject || !text) {
      return new Response(JSON.stringify({ success: false, message: "❌ All fields are required!" }), { status: 400 });
    }

    console.log("🚀 New Email Request:", { name, phone, subject, text });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      return new Response(JSON.stringify({ success: false, message: "❌ Email configuration error!" }), { status: 500 });
    }

    // ✅ Setup Mail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send Email
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `📩 New Message from ${name}`,
      text: `👤 Name: ${name}\n📞 Phone: ${phone}\n\n✉️ Message:\n${text}`,
    });

    console.log("✅ Email Sent Successfully:", info.messageId);
    return new Response(JSON.stringify({ success: true, message: "✅ Email sent successfully!" }), { status: 200 });

  } catch (error: any) {
    console.error("❌ API Error:", error);
    return new Response(JSON.stringify({ success: false, message: error.message || "Internal Server Error" }), { status: 500 });
  }
}

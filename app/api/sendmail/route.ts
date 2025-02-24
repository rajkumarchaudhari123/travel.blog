import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, text } = await req.json();

    // ✅ Sab fields check karo
    if (!name || !phone || !subject || !text) {
      return NextResponse.json(
        { success: false, message: "❌ All fields are required!" },
        { status: 400 }
      );
    }

    console.log("🚀 New Email Request:", { name, phone, subject, text });

    // ✅ Environment Variables Check
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      return NextResponse.json(
        { success: false, message: "❌ Email configuration error. Check your environment variables!" },
        { status: 500 }
      );
    }

    // ✅ Setup Mail Transporter with Debugging
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: true,  // ✅ SMTP Debugging ON
      logger: true, // ✅ Logs SMTP Output
    });

    // ✅ Send Email
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // ✅ Sender Name
      to: process.env.RECEIVER_EMAIL, // ✅ Fixed Email (Tumhare Email pe Jayega)
      subject: `📩 New Message from ${name}`,
      text: `👤 Name: ${name}\n📞 Phone: ${phone}\n\n✉️ Message:\n${text}`,
    });

    console.log("✅ Email Sent Successfully:", info.messageId);
    return NextResponse.json({ success: true, message: "✅ Email sent successfully!" });

  } catch (error: any) {
    console.error("❌ Email API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "❌ Internal Server Error" },
      { status: 500 }
    );
  }
}

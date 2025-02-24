import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, subject, text } = await req.json();

    // ❌ Yaha koi "to" field ki zaroorat nahi hai
    if (!name || !phone || !subject || !text) {
      return Response.json({ success: false, message: "❌ All fields are required!" }, { status: 400 });
    }

    console.log("🚀 New Email Request:", { name, phone, subject, text });

    // ✅ Check Environment Variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      return Response.json({ success: false, message: "❌ Email configuration error" }, { status: 500 });
    }

    // ✅ Setup Mail Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send Email to Tumhara Email (Fixing "To" Field)
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // ✅ Sender Ka Naam Show Hoga
      to: process.env.RECEIVER_EMAIL, // ✅ FIXED EMAIL - SENDER KO NHI JAYEGA
      subject: `📩 New Message from ${name}`,
      text: `👤 Name: ${name}\n📞 Phone: ${phone}\n\n✉️ Message:\n${text}`,
    });

    console.log("✅ Email Sent Successfully:", info.messageId);
    return Response.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("❌ API Error:", error);
    return Response.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

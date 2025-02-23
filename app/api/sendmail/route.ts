import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const textData = await req.text(); // 🔍 Debug request body
    console.log("📩 RAW Request Data:", textData);

    let requestData;
    try {
      requestData = JSON.parse(textData);
    } catch (jsonError) {
      console.error("❌ JSON Parsing Error:", jsonError);
      return NextResponse.json(
        { success: false, message: "❌ Invalid JSON format!" },
        { status: 400 }
      );
    }

    console.log("📩 Parsed Data:", requestData);
    const { name, phone, to, subject, text } = requestData;

    if (!name || !phone || !to || !subject || !text) {
      console.error("❌ Missing Fields:", { name, phone, to, subject, text });
      return NextResponse.json(
        { success: false, message: "❌ All fields are required!" },
        { status: 400 }
      );
    }

    // ✅ Email Config Check
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("❌ Missing Email Config in .env");
      return NextResponse.json(
        { success: false, message: "❌ Email configuration error" },
        { status: 500 }
      );
    }

    // ✅ Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: `📩 Message from ${name} (${phone}):\n\n${text}`,
    });

    console.log("✅ Email Sent:", info.messageId);
    return NextResponse.json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error: any) {
    console.error("❌ API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}

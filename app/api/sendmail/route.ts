import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // ✅ JSON parse
    const body = await req.json();
    const { name, phone, subject, text } = body;

    // ✅ Required fields validation
    if (!name || !phone || !subject || !text) {
      return NextResponse.json({ success: false, message: '❌ Missing required fields' }, { status: 400 });
    }

    console.log('📩 Sending email...');

    // ✅ Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      return NextResponse.json({ success: false, message: '❌ Email configuration error' }, { status: 500 });
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email (Recipient is now fixed)
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // FIXED EMAIL ADDRESS (Tumhari Email)
      subject,
      text: `👤 Name: ${name}\n📞 Phone: ${phone}\n\n✉️ Message:\n${text}`,
    });

    console.log('✅ Email Sent:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

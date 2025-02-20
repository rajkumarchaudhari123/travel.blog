import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    // 🛑 Safe JSON parsing
    const body = await req.json();
    const { name, phone, to, subject, text } = body;

    // 🛑 Required fields check
    if (!name || !phone || !to || !subject || !text) {
      console.error('🚨 Missing required fields:', { name, phone, to, subject, text });
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    console.log('📩 Sending email to:', to);

    // 🛑 Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('🚨 Missing EMAIL_USER or EMAIL_PASS in environment variables');
      return NextResponse.json({ success: false, message: 'Email configuration error' }, { status: 500 });
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: `👤 Name: ${name}\n📞 Phone: ${phone}\n\n✉️ Message:\n${text}`,
    });

    console.log('✅ Email Sent:', info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('❌ API Error:', error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Internal Server Error' },
      { status: 500 }
    );
  }
}

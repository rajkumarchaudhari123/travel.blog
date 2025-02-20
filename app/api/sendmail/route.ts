import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, phone, to, subject, text } = await req.json();

    if (!name || !phone || !to || !subject || !text) {
      console.error('🚨 Missing required fields:', { name, phone, to, subject, text });
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('📩 Sending email to:', to);

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, // Use 587 for TLS
      secure: false, // false for TLS, true for SSL (465)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    let info = await transporter.sendMail({
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
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}

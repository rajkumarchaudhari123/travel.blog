import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, phone, pickup, dropoff } = await req.json();

    if (!name || !phone || !pickup || !dropoff) {
      return Response.json({ success: false, message: '❌ All fields are required!' }, { status: 400 });
    }

    console.log('🚖 New Booking Received:', { name, phone, pickup, dropoff });

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECEIVER_EMAIL) {
      return Response.json({ success: false, message: '❌ Email configuration error' }, { status: 500 });
    }

    // ✅ Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // Tumhari email
      subject: "🚖 New Taxi Booking Request",
      text: `📌 Booking Details:
      👤 Name: ${name}
      📞 Phone: ${phone}
      📍 Pickup: ${pickup}
      🎯 Dropoff: ${dropoff}`,
    });

    console.log('✅ Booking Email Sent:', info.messageId);
    return Response.json({ success: true, message: 'Booking Confirmed!' });
  } catch (error: any) {
    console.error('❌ API Error:', error);
    return Response.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

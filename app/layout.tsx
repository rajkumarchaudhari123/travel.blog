import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travelya - Best Tour & Travel Services",
  description: "Explore the world with Travelya! We provide premium tour packages, cab services, and customized travel experiences. Book your next trip with us today!",
  keywords: "tour and travel, cab booking, holiday packages, travel agency, road trips, best tour services",
  authors: [{ name: "Travelya Team", url: "https://www.travelya.site" }], // ✅ Fix applied here
  robots: "index, follow",
  openGraph: {
    title: "Travelya - Your Travel Partner",
    description: "Plan your next vacation with Travelya. Enjoy hassle-free travel with our expert services and affordable packages.",
    url: "https://www.travelya.site",
    type: "website",
    images: [
      {
        url: "https://www.travelya.site/og-image.jpg", // अपनी वेबसाइट का सही OG image URL डालो
        width: 1200,
        height: 630,
        alt: "Travelya - Best Travel Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Travelya",
    title: "Travelya - Explore the World",
    description: "Discover amazing travel packages and cab booking services with Travelya.",
    images: ["https://www.travelya.site/twitter-image.jpg"], // सही URL डालो
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

         <div className=" min-h-screen h-full w-full ">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

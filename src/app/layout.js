import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mallikarjuna FinCorp - We Stand By You",
  description:
    "Your trusted financial partner for chit funds, money transfers, investments, and loans. Empowering your financial future with transparency and reliability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bet Tracker",
  description: "Track live progress for sports betting slips."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
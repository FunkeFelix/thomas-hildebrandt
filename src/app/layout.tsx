import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"], // Include 'latin' subset for most use cases
  weight: ["400", "700"], // You can include different font weights if necessary
});

export const metadata: Metadata = {
  title: "Thomas Hildebrandt - Oberbürgermeisterwahl 2024",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

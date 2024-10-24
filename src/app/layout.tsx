import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import ToastProvider from "./ToastProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className={montserrat.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}

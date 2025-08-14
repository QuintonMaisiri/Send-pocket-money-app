import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Send Pocket Money App",
  description: "A simple app to send pocket money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body
        className={`font-urbanist bg-gray-100`}
      >
        <Navbar />
        <div className="mx-auto max-w-[1440px] min-h-screen">{children}</div>
      </body>
    </html>
  );
}

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
        <div className="">{children}</div>
      </body>
    </html>
  );
}

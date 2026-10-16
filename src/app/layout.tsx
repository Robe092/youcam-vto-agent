import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouCam AI VTO Studio & Personal Shopper",
  description: "Intelligent AI Virtual Try-On Studio & Personal Shopper powered by YouCam API Skin AI & eCommerce VTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

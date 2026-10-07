import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atheriouslabs.com"),
  alternates: { canonical: "/" },
  icons: { icon: "/assets/orbit-logo.png", apple: "/assets/orbit-logo.png" },
  title: "Atherious Labs — Engineering Intelligent Systems for the Future",
  description:
    "A Bangladesh-born AI and product research lab building specialized intelligent software and digital infrastructure for a smarter, more connected world.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hair O Graft",
  description: "Hair O Graft landing page",
    icons: {
    icon: [
      {
        url: "/image.png",
        sizes: "any",
      },
      {
        url: "/image.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/image.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/image.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/image.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/image.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

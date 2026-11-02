import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@/index.css";

export const metadata: Metadata = {
  title: "amxn.in ✦ Aman Mittal",
  description: "Aman Mittal - Developer • UI/UX Designer • Open Source Enthusiast",
  icons: {
    icon: "/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-primary/30">
        {children}
        <Analytics />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LayoutShell } from "@/components/layout-shell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apg-bukber.example.com"),
  title: {
    default: "Undangan Buka Bersama | Ardana Perkasa Group",
    template: "%s | Undangan Buka Bersama APG",
  },
  description:
    "Undangan digital resmi Buka Bersama Ardana Perkasa Group. Cinematic Ramadan experience dengan nuansa corporate ultra-premium.",
  keywords: [
    "Undangan Buka Bersama",
    "Ardana Perkasa Group",
    "APG",
    "Ramadan",
    "Corporate Event",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://apg-bukber.example.com",
    title: "Undangan Buka Bersama | Ardana Perkasa Group",
    description:
      "Cinematic Ramadan corporate experience untuk keluarga besar Ardana Perkasa Group.",
    siteName: "Undangan Buka Bersama APG",
    images: [
      {
        url: "/og-apg-bukber.png",
        width: 1200,
        height: 630,
        alt: "Undangan Buka Bersama Ardana Perkasa Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Buka Bersama | Ardana Perkasa Group",
    description:
      "Undangan digital resmi Buka Bersama Ardana Perkasa Group dengan pengalaman cinematic Ramadan.",
    images: ["/og-apg-bukber.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <LayoutShell>{children}</LayoutShell>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tamil Monthly Calendar 2026",
    default: "Tamil Monthly Calendar 2026 – Free PDF Download",
  },
  description: "Download Tamil Monthly Calendar 2026 PDF. Check detailed festivals, muhurtham, ekadashi, and holidays for 2026. Daily calendar info.",
  openGraph: {
    title: "Tamil Monthly Calendar 2026",
    description: "Detailed Tamil Calendar 2026 with Festivals, Muhurtham, and Ekadashi dates.",
    type: "website",
    locale: "ta_IN",
  },
  verification: {
    google: "aj2mZjhuDIy1N-54FSxc_gHgO5zmQRulc8ftQATVAjg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansTamil.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

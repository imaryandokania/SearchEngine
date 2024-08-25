import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono as Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/nav";
import { Footer } from "@/components/footer";
import Hero from "@/components/Hero";

const mono = Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const title = "search-engine";
const description = "Open-source AI powered answer engine.";

export const metadata: Metadata = {
  metadataBase: new URL("http://gh.com"),
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: "summary_large_image",
    creator: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
        
          className={cn("antialiased", GeistSans.className, mono.className)}
          
        >
          <video
  autoPlay
  muted
  loop
  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="/encryption.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>
          <Providers>
            
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
                {children}
              <Toaster />
              {/* <Footer /> */}
              <Analytics />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  );
}

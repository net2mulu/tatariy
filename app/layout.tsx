import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { LegalModalProvider } from "@/context/legal-modal-context";
import { LegalModalWrapper } from "@/components/legal-modal-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TATARIY - Government Contracting Services",
  description:
    "Premier Small Disadvantaged and Minority Women-Owned Government Contracting Services Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LegalModalProvider>
            <Navbar />
            {children}
            <Footer />
            <LegalModalWrapper />
          </LegalModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

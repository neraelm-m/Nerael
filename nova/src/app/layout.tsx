import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioResume from "@/components/AudioResume";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "PRØYET_RED // NERAEL",
  description: "Software & Branding Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans bg-black text-white antialiased`}>
        
        <Navbar /> 

        <div className="flex flex-col min-h-screen">
          <AudioResume />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}
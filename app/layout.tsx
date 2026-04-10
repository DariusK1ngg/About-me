import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ingeniero en Informática | Full Stack Developer",
  description: "Portafolio profesional - Especialista en el desarrollo de aplicaciones de extremo a extremo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-obsidian text-white relative">
        <Providers>
          {/* Subtle background glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cobalt-blue/20 blur-[120px] pointer-events-none z-[-1]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none z-[-1]" />
          {children}
        </Providers>
      </body>
    </html>
  );
}

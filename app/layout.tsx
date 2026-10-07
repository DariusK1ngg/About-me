import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0D0C0A",
  colorScheme: "dark",
};

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
      <body className="antialiased bg-ink text-bone relative">
        <Providers>
          <ScrollProgress />
          <div aria-hidden className="fixed inset-0 z-[-1] pointer-events-none">
            <div className="absolute inset-0 bg-columns" />
            <div className="absolute inset-0 bg-noise" />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}

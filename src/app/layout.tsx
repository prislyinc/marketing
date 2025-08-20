import "@/styles/globals.css";
import type { Metadata } from "next";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Prisly",
  description: "Prisly - A melhor plataforma de bots para Discord!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#0d0d0d] text-foreground font-base antialiased dark",
          base.variable,
          heading.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
};
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Andre Fernando",
  description: "Meu portifólio",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className} suppressHydrationWarning>
      <body >{children}</body>
    </html>
  );
}

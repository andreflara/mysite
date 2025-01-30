import React from "react";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ChevronRight } from "lucide-react";

const MenuLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-gray-700"
  >
    <span className="font-md">{label}</span>
    <ChevronRight />
  </Link>
);

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">Andre Fernando</h1>
          <p className="text-lg text-gray-400">
            Aprendendo Desenvolvimento Web
          </p>
        </header>

        <nav className="mb-8">
          <h2 className="text-lg uppercase tracking-wider text-gray-400 mb-2">
            Menu
          </h2>
          <div className="grid gap-4">
            <MenuLink href="/about" label="Sobre" />
            <MenuLink href="/projects" label="Projetos" />
          </div>
        </nav>

        <footer className="border-t pt-4">
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/oandrezito"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
              className="hover:text-gray-400 transition"
            >
              <IconBrandGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/andrefernando"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="hover:text-gray-400 transition"
            >
              <IconBrandLinkedin size={28} />
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
              className="hover:text-gray-400 transition"
            >
              <IconBrandYoutube size={28} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

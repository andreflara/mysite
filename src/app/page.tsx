import type React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

interface MenuLinkProps {
  href: string;
  label: string;
}

const MenuLink = ({ href, label }: MenuLinkProps) => (
  <Link
    href={href}
    className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-gray-700/50"
  >
    <span className="font-medium">{label}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <title>Arrow Icon</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </Link>
);

interface SocialIconProps {
  href: string;
  title: string;
  children: React.ReactNode;
}

const SocialIcon = ({ href, title, children }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    className="hover:text-gray-400 transition-colors duration-200"
  >
    {children}
  </a>
);

interface CustomLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
  className?: string;
}

const CustomLink = ({
  href,
  label,
  icon,
  external = false,
  className = "",
}: CustomLinkProps) => {
  const Component = external ? "a" : Link;
  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Component
      href={href}
      {...externalProps}
      className={`group relative flex items-center rounded-xl bg-gray-800/50 p-4 transition-all duration-300 hover:bg-gray-700/50 ${className}`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900/50 text-white">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium text-white">{label}</span>
        </div>
      </div>
      <div className="ml-auto opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <title>Arrow Icon</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    </Component>
  );
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6 text-white md:p-12">
      <div className="container px-4 py-8">
        <header className="mb-12">
          <h1 className="mb-2 text-4xl font-bold">Andre Fernando</h1>
          <p className="text-lg text-gray-400">
            Aprendendo Desenvolvimento Web
          </p>
        </header>

        <nav className="mb-12">
          <h2 className="mb-4 text-lg font-medium uppercase tracking-wider text-gray-400">
            Menu
          </h2>
          <div className="space-y-2">
            <MenuLink href="/about" label="Sobre" />
            <MenuLink href="/projects" label="Projetos" />
          </div>
        </nav>

        <section className="mb-8">
          <h2 className="mb-6 text-lg font-medium uppercase tracking-wider text-gray-400">
            Outros Links
          </h2>
          <div className="mb-4">
            <CustomLink
              href="https://searchhubs.vercel.app/"
              label="SearchHub"
              external
              icon={<Search />}
            />
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <CustomLink
              href="#"
              label="MediaKit"
              icon={
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />
            <CustomLink
              href="#"
              label="YouTube"
              icon={
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              }
            />
          </div> */}
        </section>

        <footer className="border-t border-gray-800 pt-6">
          <div className="flex justify-center space-x-6">
            <SocialIcon href="https://github.com/andreflara" title="Github">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <title>Github Icon</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/in/andrefernando"
              title="LinkedIn"
            >
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <title>Linkedin Icon</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
            <SocialIcon href="https://youtube.com/" title="Youtube">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <title>YouTube Icon</title>
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
          </div>
        </footer>
      </div>
    </div>
  );
}

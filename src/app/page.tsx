import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Button = ({
  href,
  label,
  title,
  icon,
}: {
  href: string;
  label?: string;
  title?: string;
  icon?: JSX.Element;
}) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    title={title}
    className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors hover:bg-gray-800 hover:text-white h-8 px-3 border border-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500"
  >
    {icon}
    {label}
  </a>
);

const MenuLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-gray-700"
  >
    <span className="font-md">{label}</span>
    <FontAwesomeIcon
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      icon={faChevronRight}
    />
  </Link>
);

export default function HomePage() {
  return (
    <main className="font-mono flex  h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight">Andre Fernando</h1>
          <p className="text-lg text-gray-400">
            Aprendendo Desenvolvimento Web
          </p>
        </header>

        {/* Navigation */}
        <nav>
          <h2 className="text-lg uppercase tracking-wider text-gray-400">
            Menu
          </h2>
          <div>
            <MenuLink href="#" label="Sobre" />
            <MenuLink href="/projects" label="Projetos" />
          </div>
        </nav>

        {/* Links Section */}
        <section>
          <h2 className="mb-2 text-lg uppercase tracking-wider text-gray-400">
            Outros Links
          </h2>
          <div className="mb-4 px-4">
            <Button
              href="https://suporteunimed.vercel.app/"
              label="Suporte Unimed"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 px-4">
            <Button href="#" label="MediaKit" />
            <Button href="#" label="YouTube" />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-4">
          <div className="flex justify-center w-full gap-2">
            <Button
              href="https://github.com/oandrezito"
              title="Github"
              icon={<IconBrandGithub stroke={2} />}
            />
            <Button
              href="https://linkedin.com/in/andrefernando"
              title="LinkedIn"
              icon={<IconBrandLinkedin stroke={2} />}
            />
          </div>
        </footer>
      </div>
    </main>
  );
}

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function HomePage() {
  return (
    <main className="font-mono flex h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col gap-8">
        <header className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight">Andre Fernando</h1>
          <p className="text-lg text-gray-400">
            Aprendendo Desenvolvimento Web
          </p>
        </header>

        <nav>
          <h2 className="text-lg uppercase tracking-wider text-gray-400">
            Menu
          </h2>
          <div className="">
            <Link
              href="#"
              className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-gray-700"
            >
              <span className="font-md">Sobre</span>
              <FontAwesomeIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                icon={faChevronRight}
              />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-gray-700"
            >
              <span className="font-md">Projetos</span>
              <FontAwesomeIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                icon={faChevronRight}
              />
            </Link>
          </div>
        </nav>

        <section>
          <h2 className="mb-2 text-lg uppercase tracking-wider text-gray-400">
            Outros Links
          </h2>
          <div className="mb-4 px-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://suporteunimed.vercel.app/"
            >
              <button
                type="button"
                className="flex items-center justify-center whitespace-nowrap rounded-md font-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-600 bg-black shadow-sm hover:bg-gray-800 hover:text-white h-9 px-4 py-2 w-full gap-2"
              >
                Suporte Unimed
              </button>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4">
            <Link href="#">
              <button
                type="button"
                className="flex items-center justify-center whitespace-nowrap rounded-md font-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-600 bg-black shadow-sm hover:bg-gray-800 hover:text-white h-9 px-4 py-2 w-full gap-2"
              >
                MediaKit
              </button>
            </Link>
            <Link href="#">
              <button
                type="button"
                className="flex items-center justify-center whitespace-nowrap rounded-md font-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 border border-gray-600 bg-black shadow-sm hover:bg-gray-800 hover:text-white h-9 px-4 py-2 w-full gap-2"
              >
                YouTube
              </button>
            </Link>
          </div>
        </section>

        <footer className="items-center border-t pt-4">
          <div className="flex justify-center w-full">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/oandrezito"
            >
              <button
                type="button"
                className="flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800 hover:text-white h-8 rounded-md px-3 text-xs"
                title="Github"
              >
                <IconBrandGithub stroke={2} />
              </button>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/andrefernando"
            >
              <button
                type="button"
                className="flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-800 hover:text-white h-8 rounded-md px-3 text-xs"
                title="LinkedIn"
              >
                <IconBrandLinkedin stroke={2} />
              </button>
            </a>
            
          </div>
        </footer>
      </div>
    </main>
  );
}

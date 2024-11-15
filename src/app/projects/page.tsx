import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Projects() {
  return (
    <div className=" bg-black text-white p-6 md:p-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-12 w-full flex items-center justify-between"
          title="Go Back"
        >
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 hover:text-primary p-2"
          >
            <div className="flex gap-2 items-center transition-transform">
              <FontAwesomeIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                icon={faChevronLeft}
              />
              <Link href="/">Voltar</Link>
            </div>
          </button>
          <nav>
            <div className="hidden lg:flex gap-6">
              <Link
                className="text-lg uppercase tracking-wider text-gray-400"
                href="/"
              >
                Menu
              </Link>
           
            </div>
          </nav>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Projetos</h1>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="relative w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Pesquisar</title>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="w-full  bg-black border border-gray-700 rounded-md pl-10 pr-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Pesquisar projetos..."
                type="text"
              />
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://suporteunimed.vercel.app/"
                className="block"
              >
                <div className="rounded-xl  bg-black border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                  <div className="relative">
                    <img
                      src="./project-cover/suporteunimed.png"
                      alt="Suporte Unimed"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200 w-8 h-8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <title>Link externo</title>
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Suporte Unimed
                    </h2>
                    <p className="text-gray-400">
                      Site com links rápidos para suporte externo da equipe de
                      suporte técnico.
                    </p>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-primary">
                      Ver Projeto
                      <FontAwesomeIcon
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://oandrezito.github.io/dev.finances/"
                className="block"
              >
                <div className="rounded-xl  bg-black border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                  <div className="relative">
                    <img
                      src="./project-cover/devfinance.png"
                      alt="dev.finance$"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200 w-8 h-8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <title>proximo</title>
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      dev.finance$
                    </h2>
                    <p className="text-gray-400">
                      O Dev.Finance é um projeto simples para auxiliar no
                      controle das finanças.
                    </p>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-primary">
                      Ver Projeto
                      <FontAwesomeIcon
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* <div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://suporteunimed.vercel.app/"
                className="block"
              >
                <div className="rounded-xl  bg-black border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group">
                  <div className="relative">
                    <img
                      src="./project-cover/suporteunimed.png"
                      alt="Suporte Unimed"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200 w-8 h-8"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <title>proximo</title>
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      Suporte Unimed
                    </h2>
                    <p className="text-gray-400">
                      Site com links rápidos para suporte externo da equipe de
                      suporte técnico.
                    </p>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-primary">
                      Ver Projeto
                      <FontAwesomeIcon
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                        icon={faChevronRight}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

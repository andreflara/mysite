import Navegacao from "@/components/nav-section";
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
        <Navegacao />
        <div>
          <h1 className="text-4xl font-bold mb-8">Projetos</h1>
        </div>
        <div className="space-y-8">
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

import React from "react";
import Navegacao from "@/components/nav-section";
import { ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Suporte Unimed",
    description:
      "Site com links rápidos para suporte externo da equipe de suporte técnico.",
    image: "/suporteunimed.png",
    link: "https://suporteunimed.vercel.app/",
  },
  {
    id: 2,
    title: "dev.finance$",
    description:
      "O Dev.Finance é um projeto simples para auxiliar no controle das finanças.",
    image: "/devfinance.png",
    link: "https://oandrezito.github.io/dev.finances/",
  },
  {
    id: 3,
    title: "Group_Links",
    description: "Acesso rapido a Links de sites.",
    image: "/grouplinks.png",
    link: "https://group-links.vercel.app/",
  },
  {
    id: 4,
    title: "Escola Bíblica de Obreiros",
    description:
      "Lading Page criada para a Escola Bíblica de Obreiros da Igreja Assembleia de Deus em Curitiba.",
    image: "/portalebo.png",
    link: "https://lp-ebo.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navegacao />
        <h1 className="text-4xl font-bold mb-8">Projetos</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group w-full"
            >
              <div className="h-96 w-full rounded-xl bg-black border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-4 h-32">
                  <h2 className="text-xl font-semibold mb-2 truncate group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 line-clamp-3">{project.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary bg-black bg-opacity-75">
                  Ver Projeto
                  <ChevronRight />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
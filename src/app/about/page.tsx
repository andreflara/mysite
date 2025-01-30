"use client";

import Navegacao from "@/components/nav-section";
import {
  faChevronRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  const skills = [
    "Star Wars",
    "Open Source",
    "Side Projects",
    "Games",
    "Movies",
    "Action Figures",
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navegacao />

        <h1 className="text-4xl font-bold mb-8">Sobre mim</h1>

        <div className="grid gap-6 md:grid-cols-[350px_1fr]">
          {/* Profile Card */}
          <div className="rounded-xl bg-black border border-gray-700 shadow-lg p-3">
            <div className="relative mb-6">
              <img
                src="https://avatars.githubusercontent.com/u/99347254?v=4"
                alt="Profile"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">Andre Fernando</h2>
            <div className="text-gray-400 mb-4">
              <p className="mb-2">Aprendendo programação</p>
              <p className="flex items-center">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="h-4 w-4 mr-2"
                />
                Curitiba/PR
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Bio Card */}
            <div className="rounded-xl bg-black border border-gray-700 shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Bio</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sou André Fernando, profissional de TI apaixonado por
                tecnologia, atuando como Técnico de Suporte. No meu dia a dia,
                além de prestar suporte técnico, também ajudo na resolução de
                problemas e na implementação de soluções para otimizar
                processos.
                <br />
                Atualmente, estou cursando Gestão de Tecnologia da Informação e
                me dedicando ao estudo de desenvolvimento web, criando projetos
                para praticar e aprender. Estou sempre em busca de novos
                desafios e experiências para expandir meus conhecimentos e
                evoluir na área de tecnologia.
                <br />
                Sou fã de Star Wars, open source e projetos paralelos. No tempo
                livre, gosto de jogar, tocar instrumentos musicais, assistir
                filmes e restaurar o meu Fusca
              </p>
            </div>
            {/* Skills/Interests Section */}
            <div className="rounded-xl bg-black border border-gray-700 shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid mt-12 ml-1 space-y-8">
          {/* Experience 1 */}
          <div className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-1.5" />
            <div className="mb-1">
              <h3 className="text-xl font-semibold text-white">
                Suporte de TI - Unimed Curitiba
              </h3>
              <div className="flex items-center text-gray-400 text-sm space-x-1">
                <span className="font-medium text-blue-400">
                  Quality Digital
                </span>
                <span>•</span>
                <span>Curitiba/PR</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <span>jul de 2022</span>
              <span> – </span>
              <span>o momento</span>
              <span>•</span>
              <span>2 anos 7 meses</span>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-1.5" />
            <div className="mb-1">
              <h3 className="text-xl font-semibold text-white">
                Assistente administrativo
              </h3>
              <div className="flex items-center text-gray-400 text-sm space-x-1">
                <span className="font-medium text-blue-400">
                  CBRE/Contrato ExxonMobil
                </span>
                <span>•</span>
                <span>Curitiba/PR</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <span>mar de 2020</span>
              <span> – </span>
              <span>jul de 2022</span>
              <span>•</span>
              <span>2 anos 5 meses</span>
            </div>
          </div>
          {/* Experience 3 */}
          <div className="relative pl-8 border-l-2 border-gray-700">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] mt-1.5" />
            <div className="mb-1">
              <h3 className="text-xl font-semibold text-white">
                Assistente administrativo/Aprendiz
              </h3>
              <div className="flex items-center text-gray-400 text-sm space-x-1">
                <span className="font-medium text-blue-400">
                Vivante
                </span>
                <span>•</span>
                <span>Curitiba/PR</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <span>jan de 2018</span>
              <span> – </span>
              <span>mai de 2019</span>
              <span>•</span>
              <span>1 ano 5 meses</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

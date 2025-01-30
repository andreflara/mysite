"use client";

import Navegacao from "@/components/nav-section";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Car,
  Clapperboard,
  Guitar,
  LaptopMinimal,
  MapPin,
  Music4,
  Pizza,
  Tv,
} from "lucide-react";

const preferences = [
  { Icon: MapPin, title: "Cidade", value: "Curitiba, PR" },
  { Icon: Pizza, title: "Comida", value: "Pizza" },
  { Icon: LaptopMinimal, title: "Sistema", value: "Windows / Linux" },
  { Icon: Clapperboard, title: "Filme", value: "Star Wars" },
  { Icon: Tv, title: "Série", value: "Obi-Wan Kenobi" },
  { Icon: Music4, title: "Música", value: "Lofi" },
  { Icon: Guitar , title: "Instrumento", value: "Contrabaixo" },
  { Icon: Car, title: "Carro", value: "Fusca 84" },

];

const experiences = [
  {
    title: "Suporte de TI - Unimed Curitiba",
    company: "Quality Digital",
    location: "Curitiba/PR",
    period: "jul de 2022 – o momento",
    duration: "2 anos 7 meses",
  },
  {
    title: "Assistente Administrativo",
    company: "CBRE/Contrato ExxonMobil",
    location: "Curitiba/PR",
    period: "mar de 2020 – jul de 2022",
    duration: "2 anos 5 meses",
  },
  {
    title: "Assistente Administrativo/Aprendiz",
    company: "Vivante",
    location: "Curitiba/PR",
    period: "jan de 2018 – mai de 2019",
    duration: "1 ano 5 meses",
  },
];

export default function Profile() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white p-6 md:p-12 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navegacao />
        <h1 className="text-4xl font-bold mb-8">Sobre mim</h1>

        <div className="grid gap-6 md:grid-cols-[350px_1fr] items-start">
          {/* Profile Card */}
          <div className="rounded-xl bg-gray-950 border border-gray-700 shadow-lg p-6 flex flex-col">
            <div
              className="relative mb-2 w-full"
              style={{ aspectRatio: "2 / 1" }}
            >
              <Image
                src="/AndreFernando.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
                width={600}
                height={300}
              />
            </div>
            <h2 className="text-2xl font-bold">André Fernando</h2>
            <p className="text-gray-400">Aprendendo programação</p>
            <p className="flex items-center text-gray-400">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-4 w-4 mr-2" />
              Curitiba/PR
            </p>
          </div>

          {/* Bio + Interests Container */}
          <div className="space-y-6 flex flex-col">
            {/* Bio Section */}
            <div className="rounded-xl bg-gray-950 border border-gray-700 shadow-lg p-7">
              <h3 className="text-xl font-bold mb-4">Bio</h3>
              <p className="text-gray-400 leading-relaxed">
                Sou o <strong>André Fernando</strong>, profissional de TI
                apaixonado por tecnologia, atuando como Técnico de Suporte. No
                meu dia a dia, além de prestar suporte técnico, ajudo na
                resolução de problemas e na implementação de soluções para
                otimizar processos.
                <br />
                Atualmente, estou cursando Gestão de Tecnologia da Informação e
                me dedicando ao estudo de desenvolvimento web, criando projetos
                para praticar e aprender. Estou sempre em busca de novos
                desafios e experiências para expandir meus conhecimentos e
                evoluir na área de tecnologia.
                <br />
                Sou fã de Star Wars, open source e projetos paralelos. No tempo
                livre, gosto de jogar, tocar instrumentos musicais, assistir
                filmes e restaurar o meu Fusca.
              </p>
            </div>

            {/* Preferences Section */}
            <div className="rounded-xl bg-gray-950 border border-gray-700 shadow-lg p-7">
              <h3 className="text-xl font-bold mb-2">Preferências</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                {preferences.map(({ Icon, title, value }) => (
                  <div key={title} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-5 h-5 text-white" />
                      <h4 className="font-semibold">{title}</h4>
                    </div>
                    <p className="text-gray-400">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-12 space-y-8">
          <h3 className="text-xl font-bold mb-4">Experiência Profissional</h3>
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="relative pl-8 border-l-2 border-gray-700"
            >
              <div className="absolute w-3 h-3 bg-gray-100 rounded-full -left-[7px] mt-1.5" />
              <div className="mb-1">
                <h3 className="text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm space-x-1">
                  <span className="font-medium text-gray-300">
                    {exp.company}
                  </span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                {exp.period} • {exp.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

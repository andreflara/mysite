"use client";

import type React from "react";
import Despesas from "./despesas";
import Navegacao from "@/components/nav-section";
import Receitas from "./receita";
import Dashboard from "./dashboard";
import { useState } from "react";

const Layout: React.FC = () => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);

  const handleDespesasUpdate = (newDespesas: Despesa[], totalDespesas: number) => {
    setDespesas(newDespesas);
  };
  return (
    <div className=" bg-black p-6 md:p-12 min-h-screen ">
      <div className="max-w-6xl mx-auto ">
        <Navegacao />
        <h1 className="text-4xl font-bold mb-8  text-white">
          Gestão de Finanças
        </h1>

        <div className="items-center grid gap-4">
        <Despesas initialDespesas={despesas} onDespesasUpdate={handleDespesasUpdate} />
        <Dashboard despesas={despesas} />
        </div>
      </div>
    </div>
  );
};

export default Layout;

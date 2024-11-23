"use client";

import type React from "react";
import Despesas from "./despesas";
import Navegacao from "@/components/nav-section";
import Receitas from "./receitas";
import Dashboard from "./dashboard";
import { useState } from "react";

// Align types with the component implementations
interface Despesa {
  id: string;
  descricao: string;
  valor: number;
  status: "Pago" | "Pendente" | "Atrasado";
  modo: "Parcelado" | "À Vista";
  dataVencimento: string;
  parcelas?: { valor: number; data: string }[];  // Changed from 'data' to match Despesas component
}

interface Receita {
  id: string;
  descricao: string;
  valor: number;
  dataEntrada: string;  // Changed from 'data' to match Receitas component
}

const Layout: React.FC = () => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [receitas, setReceitas] = useState<Receita[]>([]);

  // Remove unused totalDespesas parameter and fix types
  const handleDespesasUpdate = (newDespesas: Despesa[]) => {
    setDespesas(newDespesas);
  };

  // Remove unused totalDespesas parameter and fix types
  const handleReceitasUpdate = (newReceitas: Receita[]) => {
    setReceitas(newReceitas);
  };

  return (
    <div className="bg-black p-6 md:p-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Navegacao />
        <h1 className="text-4xl font-bold mb-8 text-white">
          Gestão de Finanças
        </h1>

        <div className="items-center grid gap-4">
          <Despesas 
            initialDespesas={despesas} 
            onDespesasUpdate={handleDespesasUpdate} 
          />
          <Receitas 
            initialReceitas={receitas} 
            onReceitasUpdate={handleReceitasUpdate}
          />
          <Dashboard 
            despesas={despesas} 
            receitas={receitas} 
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
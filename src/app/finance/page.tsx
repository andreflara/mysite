"use client";

import type React from "react";
import Despesas from "./despesas";
import Navegacao from "@/components/nav-section";
import Receitas from "./receitas";
import Dashboard from "./dashboard";
import { useEffect, useState } from "react";
import SearchFilterComponent from "@/components/filtroano";

// Align types with the component implementations
interface Parcela {
  valor: number;
  dataVencimentoParcela: string;
  status: "Pago" | "Pendente" | "Atrasado";
}


interface Despesa {
  id: string;
  descricao: string;
  valor: number;
  status: "Pago" | "Pendente" | "Atrasado" ;
  modo: "Parcelado" | "À Vista";
  dataVencimento: string;
  parcelas?: Parcela[];
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
  const [filteredDespesas, setFilteredDespesas] = useState<Despesa[]>([]);

  // Remove unused totalDespesas parameter and fix types
  const handleDespesasUpdate = (newDespesas: Despesa[]) => {
    setDespesas(newDespesas);
  };

  // Remove unused totalDespesas parameter and fix types
  const handleReceitasUpdate = (newReceitas: Receita[]) => {
    setReceitas(newReceitas);
  };

   // Sincroniza o estado filteredDespesas com o estado despesas
   useEffect(() => {
    setFilteredDespesas(despesas);
  }, [despesas]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <Navegacao />
        <h1 className="text-4xl font-bold mb-8 text-white">
          Gestão de Finanças
        </h1>

        <div className="items-center grid gap-4">
          <Despesas 
            initialDespesas={filteredDespesas}
            onDespesasUpdate={handleDespesasUpdate} despesas={[]}          />
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
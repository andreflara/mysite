import { useState } from "react";
import type React from "react";

interface Parcela {
  valor: number;
  data: string;
  status: "Pago" | "Pendente" | "Atrasado";
}

interface Despesa {
  id: string;
  descricao: string;
  valor: number;
  status: "Pago" | "Pendente" | "Atrasado";
  modo: "Parcelado" | "À Vista";
  dataVencimento: string;
  parcelas?: Parcela[];
}

interface SearchFilterComponentProps {
  despesas: Despesa[]; // Lista de despesas completas
  onFilteredDespesas: (filtered: Despesa[]) => void; // Função para atualizar as despesas filtradas
}

const SearchFilterComponent: React.FC<SearchFilterComponentProps> = ({
  despesas,
  onFilteredDespesas,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Quando o campo de pesquisa mudar, filtramos as despesas
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Se o campo de pesquisa estiver vazio, mostra todas as despesas
    const filtered = query
      ? despesas.filter((despesa) =>
          despesa.descricao.toLowerCase().includes(query.toLowerCase())
        )
      : despesas; // Caso contrário, mostramos todas as despesas

    // Passa a lista filtrada para o componente pai
    onFilteredDespesas(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 border rounded"
        placeholder="Buscar despesa..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchFilterComponent;

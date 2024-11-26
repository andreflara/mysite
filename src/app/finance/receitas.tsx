"use client";

import React, { useState, useCallback, useMemo } from "react";
import {
  AlertCircle,
  Trash2,
  Plus,
  Save,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

// Types
interface Receita {
  id: string;
  descricao: string;
  valor: number;
  dataEntrada: string;
}

// Constants
const INITIAL_DESPESA: Omit<Receita, "id"> = {
  descricao: "",
  valor: 0,
  dataEntrada: new Date().toISOString().split("T")[0],
};

// Utility Functions
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("pt-BR");

// Alert Component
const Alert: React.FC<{ message: string }> = React.memo(({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center gap-2">
    <AlertCircle className="h-4 w-4" />
    <span>{message}</span>
  </div>
));Alert.displayName = 'Alert'; 

// Main Component
const Receitas: React.FC<{
  initialReceitas?: Receita[];
  onReceitasUpdate?: (despesas: Receita[]) => void;
}> = ({ initialReceitas = [], onReceitasUpdate }) => {
  // State Management
  const [receitas, setReceitas] = useState<Receita[]>(initialReceitas);
  const [novaReceita, setNovaReceita] = useState<Receita>({
    ...INITIAL_DESPESA,
    id: crypto.randomUUID(),
  });
  const [erro, setErro] = useState<string>("");
  const [modoEdicao, setModoEdicao] = useState<string | null>(null);
  const [showReceitas, setShowReceitas] = useState(false);

  // Validation
  const validarReceita = useCallback((receita: Receita): boolean => {
    if (!receita.descricao.trim()) {
      setErro("A descrição da Receita é obrigatória");
      return false;
    }
    if (receita.valor <= 0) {
      setErro("O valor deve ser maior que zero");
      return false;
    }
    if (!receita.dataEntrada) {
      setErro("A data da receita é obrigatória");
      return false;
    }
    return true;
  }, []);

  // Handlers
  const adicionarReceita = useCallback(() => {
    setErro("");
    if (!validarReceita(novaReceita)) return;

    const newReceitas = [...receitas, novaReceita];
    setReceitas(newReceitas);
    onReceitasUpdate?.(newReceitas);
    setNovaReceita({
      ...INITIAL_DESPESA,
      id: crypto.randomUUID(),
    });
  }, [novaReceita, validarReceita, onReceitasUpdate, receitas]);

  const removerReceita = useCallback(
    (id: string) => {
      const newReceitas = receitas.filter((receita) => receita.id !== id);
      setReceitas(newReceitas);
      onReceitasUpdate?.(newReceitas); // Atualiza o total de despesas no componente pai
    },
    [onReceitasUpdate, receitas]
  );

  const editarReceita = useCallback(
    (id: string) => {
      const receita = receitas.find((d) => d.id === id);
      if (receita) {
        setModoEdicao(id);
        setNovaReceita(receita);
      }
    },
    [receitas]
  );

  const salvarEdicao = useCallback(() => {
    if (!validarReceita(novaReceita)) return;

    const newReceitas = receitas.map((receita) =>
      receita.id === modoEdicao ? novaReceita : receita
    );

    setReceitas(newReceitas);
    onReceitasUpdate?.(newReceitas);

    setModoEdicao(null);
    setNovaReceita({
      ...INITIAL_DESPESA,
      id: crypto.randomUUID(),
    });
  }, [modoEdicao, novaReceita, validarReceita, onReceitasUpdate, receitas]);

  // Memoized Calculations
  const calcularTotal = useMemo(
    () => receitas.reduce((total, receita) => total + receita.valor, 0),
    [receitas]
  );

  // Render Methods
  const renderInputs = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 text-[#9aa2ad]">
      <input
        type="text"
        placeholder="Descrição"
        value={novaReceita.descricao}
        onChange={(e) =>
          setNovaReceita((prev) => ({
            ...prev,
            descricao: e.target.value,
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      />
      <input
        type="number"
        placeholder="Valor"
        value={novaReceita.valor}
        onChange={(e) =>
          setNovaReceita((prev) => ({
            ...prev,
            valor: Number(e.target.value),
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      />
      <input
        type="date"
        value={novaReceita.dataEntrada}
        onChange={(e) =>
          setNovaReceita((prev) => ({
            ...prev,
            dataDataReceita: e.target.value,
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      />
      <button
        type="button"
        onClick={modoEdicao ? salvarEdicao : adicionarReceita}
        className="w-full h-full bg-gray-600 hover:bg-gray-700 text-white p-2 rounded flex items-center justify-center gap-2 transition-colors"
      >
        {modoEdicao ? (
          <>
            <Save className="h-4 w-4" />
            Salvar
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" />
            Adicionar
          </>
        )}
      </button>
    </div>
  );

  const renderTableRows = () => (
    <tbody className="bg-slate-50 divide-y text-black divide-gray-200">
      {receitas.map((receita) => (
        <tr key={receita.id} className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">{receita.descricao}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {formatCurrency(receita.valor)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {formatDate(receita.dataEntrada)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => editarReceita(receita.id)}
                className="text-blue-600 hover:text-blue-900"
              >
                Editar
              </button>
              <button
                type="button"
                onClick={() => removerReceita(receita.id)}
                className="text-red-600 hover:text-red-900 flex items-center gap-1"
              >
                <Trash2 className="h-4 w-4" />
                Remover
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div
      className="border border-gray-600 rounded-md"
      aria-expanded={showReceitas}
    >
      <button
        type="button"
        className="hover:bg-gray-700 h-full w-full text-white p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setShowReceitas(!showReceitas)}
        aria-controls="receitas-section"
      >
        <h2 className="text-lg font-semibold">Receitas</h2>
        {showReceitas ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
      </button>

      {showReceitas && (
        <div id="receitas-section" className="p-4 ">
          <div className="mx-auto">
            {erro && <Alert message={erro} />}

            <div className="rounded-md shadow mb-4">{renderInputs()}</div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    {["Descrição", "Valor", "Data Receita", "Ações"].map(
                      (header) => (
                        <th
                          key={header}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                {renderTableRows()}
                <tfoot className="bg-gray-50">
                  <tr>
                    <td
                      colSpan={2}
                      className="px-6 py-4 text-sm font-medium text-gray-900"
                    >
                      Total: {formatCurrency(calcularTotal)}
                    </td>
                    <td colSpan={3} />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Receitas;

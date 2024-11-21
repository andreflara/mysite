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
interface Despesa {
  id: string;
  descricao: string;
  valor: number;
  status: "Pago" | "Pendente" | "Atrasado";
  dataVencimento: string;
}

// Constants
const INITIAL_DESPESA: Omit<Despesa, "id"> = {
  descricao: "",
  valor: 0,
  status: "Pendente",
  dataVencimento: new Date().toISOString().split("T")[0],
};

const STATUS_COLORS = {
  Pago: "bg-green-100 text-green-800",
  Pendente: "bg-yellow-100 text-yellow-800",
  Atrasado: "bg-red-100 text-red-800",
} as const;

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
));

// Main Component
const Despesas: React.FC<{
  initialDespesas?: Despesa[];
  onDespesasUpdate?: (despesas: Despesa[]) => void;
}> = ({ initialDespesas = [], onDespesasUpdate }) => {
  // State Management
  const [despesas, setDespesas] = useState<Despesa[]>(initialDespesas);
  const [novaDespesa, setNovaDespesa] = useState<Despesa>({
    ...INITIAL_DESPESA,
    id: crypto.randomUUID(),
  });
  const [erro, setErro] = useState<string>("");
  const [modoEdicao, setModoEdicao] = useState<string | null>(null);
  const [showDespesas, setShowDespesas] = useState(false);

  // Validation
  const validarDespesa = useCallback((despesa: Despesa): boolean => {
    if (!despesa.descricao.trim()) {
      setErro("A descrição é obrigatória");
      return false;
    }
    if (despesa.valor <= 0) {
      setErro("O valor deve ser maior que zero");
      return false;
    }
    if (!despesa.dataVencimento) {
      setErro("A data de vencimento é obrigatória");
      return false;
    }
    return true;
  }, []);

  // Handlers
  const adicionarDespesa = useCallback(() => {
    setErro("");
    if (!validarDespesa(novaDespesa)) return;

    const newDespesas = [...despesas, novaDespesa];
    setDespesas(newDespesas);
    onDespesasUpdate?.(newDespesas); // Atualiza o total de despesas no componente pai
    setNovaDespesa({
      ...INITIAL_DESPESA,
      id: crypto.randomUUID(),
    });
  }, [novaDespesa, validarDespesa, onDespesasUpdate, despesas]);

  const removerDespesa = useCallback(
    (id: string) => {
      const newDespesas = despesas.filter((despesa) => despesa.id !== id);
      setDespesas(newDespesas);
      onDespesasUpdate?.(newDespesas); // Atualiza o total de despesas no componente pai
    },
    [onDespesasUpdate, despesas]
  );

  const editarDespesa = useCallback(
    (id: string) => {
      const despesa = despesas.find((d) => d.id === id);
      if (despesa) {
        setModoEdicao(id);
        setNovaDespesa(despesa);
      }
    },
    [despesas]
  );

  const salvarEdicao = useCallback(() => {
    if (!validarDespesa(novaDespesa)) return;

    const newDespesas = despesas.map((despesa) =>
      despesa.id === modoEdicao ? novaDespesa : despesa
    );

    setDespesas(newDespesas);
    onDespesasUpdate?.(newDespesas);

    setModoEdicao(null);
    setNovaDespesa({
      ...INITIAL_DESPESA,
      id: crypto.randomUUID(),
    });
  }, [modoEdicao, novaDespesa, validarDespesa, onDespesasUpdate, despesas]);

  // Memoized Calculations
  const calcularTotal = useMemo(
    () => despesas.reduce((total, despesa) => total + despesa.valor, 0),
    [despesas]
  );

  // Render Methods
  const renderInputs = () => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-1 text-[#9aa2ad]">
      <input
        type="text"
        placeholder="Descrição"
        value={novaDespesa.descricao}
        onChange={(e) =>
          setNovaDespesa((prev) => ({
            ...prev,
            descricao: e.target.value,
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      />
      <input
        type="number"
        placeholder="Valor"
        value={novaDespesa.valor}
        onChange={(e) =>
          setNovaDespesa((prev) => ({
            ...prev,
            valor: Number(e.target.value),
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      />
      <input
        type="date"
        value={novaDespesa.dataVencimento}
        onChange={(e) =>
          setNovaDespesa((prev) => ({
            ...prev,
            dataVencimento: e.target.value,
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      />
      <select
        value={novaDespesa.status}
        onChange={(e) =>
          setNovaDespesa((prev) => ({
            ...prev,
            status: e.target.value as Despesa["status"],
          }))
        }
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      >
        <option value="Pendente" className="text-black">
          Pendente
        </option>
        <option value="Pago" className="text-black">
          Pago
        </option>
        <option value="Atrasado" className="text-black">
          Atrasado
        </option>
      </select>
      <button
        type="button"
        onClick={modoEdicao ? salvarEdicao : adicionarDespesa}
        className="w-full bg-gray-600 hover:bg-gray-700 text-white p-2 rounded flex items-center justify-center gap-2 transition-colors"
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
      {despesas.map((despesa) => (
        <tr key={despesa.id} className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">{despesa.descricao}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {formatCurrency(despesa.valor)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {formatDate(despesa.dataVencimento)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                STATUS_COLORS[despesa.status]
              }`}
            >
              {despesa.status}
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => editarDespesa(despesa.id)}
                className="text-blue-600 hover:text-blue-900"
              >
                Editar
              </button>
              <button
                type="button"
                onClick={() => removerDespesa(despesa.id)}
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
      aria-expanded={showDespesas}
    >
      <button
        type="button"
        className="hover:bg-gray-700 h-full w-full text-white p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setShowDespesas(!showDespesas)}
        aria-controls="despesas-section"
      >
        <h2 className="text-lg font-semibold">Despesas</h2>
        {showDespesas ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
      </button>

      {showDespesas && (
        <div id="despesas-section" className="p-4">
          <div className="max-w-6xl mx-auto">
            {erro && <Alert message={erro} />}

            <div className="rounded-md shadow mb-4">{renderInputs()}</div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-white">
                  <tr>
                    {[
                      "Descrição",
                      "Valor",
                      "Vencimento",
                      "Status",
                      "Ações",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
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

export default Despesas;

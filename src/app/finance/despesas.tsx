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

// Constants
const INITIAL_DESPESA: Omit<Despesa, "id"> = {
  descricao: "",
  valor: 0,
  status: "Pendente",
  modo: "À Vista",
  dataVencimento: new Date().toISOString().split("T")[0],
  parcelas: [],
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

const generateParcelasForDespesa = (
  valor: number,
  dataInicial: string,
  numParcelas: number
): Parcela[] => {
  const parcelas: Parcela[] = [];
  const valorParcela = Number((valor / numParcelas).toFixed(2));
  const currentDate = new Date(dataInicial);

  for (let i = 0; i < numParcelas; i++) {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + i);

    parcelas.push({
      valor:
        i === numParcelas - 1
          ? valor - valorParcela * (numParcelas - 1)
          : valorParcela,
      data: nextMonth.toISOString().split("T")[0],
      status: "Pendente",
    });
  }

  return parcelas;
};

// Alert Component
const Alert = React.memo<{ message: string }>(({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 flex items-center gap-2">
    <AlertCircle className="h-4 w-4" />
    <span>{message}</span>
  </div>
));
Alert.displayName = "Alert";

// Input Field Component
const InputField = React.memo<{
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
}>(({ type, placeholder, value, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className={`w-full p-2 border rounded focus:ring-2 focus:border-hidden ${className}`}
  />
));
InputField.displayName = "InputField";

// Status Select Component
const StatusSelect = React.memo<{
  value: "Pago" | "Pendente" | "Atrasado";
  onChange: (value: "Pago" | "Pendente" | "Atrasado") => void;
  className?: string;
}>(({ value, onChange, className }) => (
  <select
    value={value}
    onChange={(e) =>
      onChange(e.target.value as "Pago" | "Pendente" | "Atrasado")
    }
    className={` px-2 py-[0.1rem] text-xs rounded-md border ${STATUS_COLORS[value]} ${className}`}
  >
    <option className="bg-yellow-100 text-yellow-700" value="Pendente">
      Pendente
    </option>
    <option className="bg-green-100 text-green-700" value="Pago">
      Pago
    </option>
    <option className=" bg-red-100 text-red-700" value="Atrasado">
      Atrasado
    </option>
  </select>
));
StatusSelect.displayName = "StatusSelect";

interface DespesasProps {
  despesas: Despesa[]; // Lista de despesas filtradas
  initialDespesas?: Despesa[]; // Se você vai passar a lista inicial de despesas
  onDespesasUpdate?: (despesas: Despesa[]) => void; // Função callback para atualizar as despesas
}

// Main Component
const Despesas: React.FC<DespesasProps> = ({
  initialDespesas = [],
  onDespesasUpdate,
}) => {
  // State Management
  const [despesas, setDespesas] = useState<Despesa[]>(initialDespesas);
  const [novaDespesa, setNovaDespesa] = useState<Despesa>({
    ...INITIAL_DESPESA,
    id: crypto.randomUUID(),
  });
  const [erro, setErro] = useState<string>("");
  const [modoEdicao, setModoEdicao] = useState<string | null>(null);
  const [showDespesas, setShowDespesas] = useState(false);
  const [numParcelas, setNumParcelas] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para armazenar o termo de pesquisa

  // Filtrando as despesas com base no termo de pesquisa
  const filteredDespesas = useMemo(() => {
    return despesas.filter((despesa) =>
      despesa.descricao.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [despesas, searchTerm]);

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
    if (
      despesa.modo === "Parcelado" &&
      (!despesa.parcelas || despesa.parcelas.length === 0)
    ) {
      setErro("O número de parcelas é obrigatório para pagamento parcelado");
      return false;
    }
    return true;
  }, []);

  const handleDespesaChange = useCallback(
    (field: keyof Despesa, value: Despesa[keyof Despesa]) => {
      setNovaDespesa((prev) => {
        const updated = { ...prev, [field]: value };

        if (field === "modo" && value === "À Vista") {
          updated.parcelas = [];
          setNumParcelas(1);
        }

        return updated;
      });
    },
    []
  );

  const handleParcelasChange = useCallback((numParcelasStr: string) => {
    const num = Number.parseInt(numParcelasStr, 10);
    if (Number.isNaN(num) || num <= 0) return;

    setNumParcelas(num);
    setNovaDespesa((prev) => ({
      ...prev,
      parcelas: generateParcelasForDespesa(
        prev.valor,
        prev.dataVencimento,
        num
      ),
    }));
  }, []);

  const adicionarDespesa = useCallback(() => {
    setErro("");
    if (!validarDespesa(novaDespesa)) return;

    const newDespesas = [...despesas, novaDespesa];
    setDespesas(newDespesas);
    onDespesasUpdate?.(newDespesas);

    setNovaDespesa({
      ...INITIAL_DESPESA,
      id: crypto.randomUUID(),
    });
    setNumParcelas(1);
  }, [novaDespesa, validarDespesa, onDespesasUpdate, despesas]);

  const removerDespesa = useCallback(
    (id: string) => {
      const newDespesas = despesas.filter((despesa) => despesa.id !== id);
      setDespesas(newDespesas);
      onDespesasUpdate?.(newDespesas);
    },
    [onDespesasUpdate, despesas]
  );

  const editarDespesa = useCallback(
    (id: string) => {
      const despesa = despesas.find((d) => d.id === id);
      if (despesa) {
        setModoEdicao(id);
        setNovaDespesa(despesa);
        setNumParcelas(despesa.parcelas?.length || 1);
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
    setNumParcelas(1);
  }, [modoEdicao, novaDespesa, validarDespesa, onDespesasUpdate, despesas]);

  const renderInputs = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-[#9aa2ad]">
      <InputField
        type="text"
        placeholder="Descrição"
        value={novaDespesa.descricao}
        onChange={(value) => handleDespesaChange("descricao", value)}
      />
      <InputField
        type="number"
        placeholder="Valor"
        value={novaDespesa.valor}
        onChange={(value) => handleDespesaChange("valor", Number(value))}
      />
      <InputField
        type="date"
        value={novaDespesa.dataVencimento}
        onChange={(value) => handleDespesaChange("dataVencimento", value)}
      />
      <select
        value={novaDespesa.modo}
        onChange={(e) => handleDespesaChange("modo", e.target.value)}
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      >
        <option value="À Vista">À Vista</option>
        <option value="Parcelado">Parcelado</option>
      </select>

      {novaDespesa.modo === "Parcelado" && (
        <InputField
          type="number"
          placeholder="Número de Parcelas"
          value={numParcelas}
          onChange={handleParcelasChange}
        />
      )}

      <select
        value={novaDespesa.status}
        onChange={(e) => handleDespesaChange("status", e.target.value)}
        className="w-full p-2 border rounded focus:ring-2 focus:border-hidden"
      >
        <option value="Pendente">Pendente</option>
        <option value="Pago">Pago</option>
        <option value="Atrasado">Atrasado</option>
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
      {filteredDespesas.map((despesa) => (
        <tr key={despesa.id} className="hover:bg-gray-100">
          <td className="px-6 py-4 whitespace-nowrap">{despesa.descricao}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            {formatCurrency(despesa.valor)}
          </td>
          <td className="px-6 py-4 whitespace-normal">
            {despesa.modo === "Parcelado" && despesa.parcelas
              ? despesa.parcelas.map((parcela, index) => (
                  <div
                    key={`${parcela.valor}-${parcela.data}-${index}`}
                    className="mb-1"
                  >
                    {`Parcela ${index + 1}: ${formatCurrency(
                      parcela.valor
                    )} - ${formatDate(parcela.data)}`}
                  </div>
                ))
              : formatDate(despesa.dataVencimento)}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            {despesa.modo === "Parcelado" && despesa.parcelas ? (
              despesa.parcelas.map((parcela, index) => (
                <div
                  key={`${parcela.valor}-${parcela.data}-${index}`}
                  className="mb-1"
                >
                  <StatusSelect
                    value={parcela.status}
                    onChange={(novoStatus) =>
                      console.log(`Status da Parcela atualizado: ${novoStatus}`)
                    }
                  />
                </div>
              ))
            ) : (
              <StatusSelect
                value={despesa.status}
                onChange={(novoStatus) =>
                  console.log(`Status da Despesa atualizado: ${novoStatus}`)
                }
              />
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex gap-2">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-900"
                onClick={() => editarDespesa(despesa.id)}
              >
                Editar
              </button>
              <button
                type="button"
                className="text-red-600 hover:text-red-900 flex items-center gap-1"
                onClick={() => removerDespesa(despesa.id)}
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
    <div className="border border-gray-600 rounded-md">
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

            {/* Campo de Pesquisa */}
            <div className="mb-4">
              <InputField
                type="text"
                placeholder="Pesquisar despesas..."
                value={searchTerm}
                onChange={(value) => setSearchTerm(value)}
              />
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
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
                      Total:{" "}
                      {formatCurrency(
                        despesas.reduce(
                          (total, despesa) => total + despesa.valor,
                          0
                        )
                      )}
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

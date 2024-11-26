import type React from "react";
import { useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  ChevronDown,
  ChevronRight,
} from "lucide-react";


interface Parcela {
  valor: number;
  dataVencimentoParcela: string;
}

// Tipos já definidos anteriormente
interface Despesa {
  id: string;
  descricao: string;
  valor: number;
  status: string;
  modo: "Parcelado" | "À Vista";
  dataVencimento: string;
  parcelas?: Parcela[];
}

interface Receita {
  id: string;
  descricao: string;
  valor: number;
  dataEntrada: string;
}

// Utility Functions
const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

// Função para calcular total segura
type Item = {
  valor: number;
};

const calculateTotal = (items: Item[] | undefined) =>
  items?.reduce((total, item) => total + item.valor, 0) || 0;

const Dashboard: React.FC<{
  despesas?: Despesa[];
  receitas?: Receita[];
}> = ({ despesas = [], receitas = [] }) => {
  const [showDashboard, setShowDashboard] = useState(true);

  // Memoized Calculations com tratamento seguro
  const totalDespesas = useMemo(() => {
    return calculateTotal(despesas);
  }, [despesas]);

  const totalReceitas = useMemo(() => {
    return calculateTotal(receitas);
  }, [receitas]);
 

  // Prepare data for chart
  const chartData = useMemo(() => {
    if (!despesas.length && !receitas.length) return [];

    const combinedData = [
      ...despesas.map((item) => ({
        name: item.descricao,
        valor: item.valor,
        data: item.dataVencimento,
        type: "Despesa",
      })),
      ...receitas.map((item) => ({
        name: item.descricao,
        valor: item.valor,
        data: item.dataEntrada,
        type: "Receita",
      })),
    ];

    return combinedData.sort(
      (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
    );
  }, [despesas, receitas]);

  // Financial Summary
  const financialSummary = useMemo(() => {
    const balance = totalReceitas - totalDespesas;
    return {
      totalReceitas,
      totalDespesas,
      balance,
      isPositive: balance >= 0,
    };
  }, [totalReceitas, totalDespesas]);

  // Verificação do resumo financeiro
  console.log("Resumo financeiro:", financialSummary);

  return (
    <div className="border border-gray-600 rounded-md">
      <button
        className="w-full h-full hover:bg-gray-700 text-white p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setShowDashboard(!showDashboard)}
        type="button"
        aria-controls="dashboard-section"
      >
        <h2 className="text-lg font-semibold">Financial Dashboard</h2>
        {showDashboard ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
      </button>

      {showDashboard && (
        <div id="dashboard-section" className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Financial Summary Cards */}
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-gray-500 text-sm mb-2">Total Receitas</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(financialSummary.totalReceitas)}
                </span>
                <TrendingUp className="text-green-600" />
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-gray-500 text-sm mb-2">Total Despesas</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">
                  {formatCurrency(financialSummary.totalDespesas)}
                </span>
                <TrendingDown className="text-red-600" />
              </div>
            </div>

            <div
              className={`bg-white shadow rounded-lg p-6 ${
                financialSummary.isPositive
                  ? "border-green-500"
                  : "border-red-500"
              } border-l-4`}
            >
              <h3 className="text-gray-500 text-sm mb-2">Saldo Final</h3>
              <div className="flex items-center justify-between">
                <span
                  className={`text-2xl font-bold ${
                    financialSummary.isPositive
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formatCurrency(financialSummary.balance)}
                </span>
                {financialSummary.isPositive ? (
                  <TrendingUp className="text-green-600" />
                ) : (
                  <TrendingDown className="text-red-600" />
                )}
              </div>
            </div>
          </div>

          {/* Financial Chart */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-500 text-sm mb-4">Financial Timeline</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                  formatter={(value, name, props) => [
                    formatCurrency(Number(value)),
                    props.payload.type,
                  ]}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

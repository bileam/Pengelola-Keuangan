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

// const data = [
//   { bulan: "Jan", pemasukan: 4000000, pengeluaran: 2000000 },
//   { bulan: "Feb", pemasukan: 3000000, pengeluaran: 1398000 },
//   { bulan: "Mar", pemasukan: 5000000, pengeluaran: 3800000 },
//   { bulan: "Apr", pemasukan: 4780000, pengeluaran: 3908000 },
//   { bulan: "mey", pemasukan: 5000000, pengeluaran: 5500000 },
//   { bulan: "juny", pemasukan: 4780000, pengeluaran: 3908000 },
//   { bulan: "july", pemasukan: 4780000, pengeluaran: 3908000 },
// ];

const Chart = ({ data }) => {
  return (
    <div className="w-full h-100 bg-white p-8 rounded shadow">
      <h2 className="font-semibold ">Laporan Keuangan Tahunan</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="pemasukan"
            stroke="#2563eb"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="pengeluaran"
            stroke="#dc2626"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="saldo"
            stroke="#16a34a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

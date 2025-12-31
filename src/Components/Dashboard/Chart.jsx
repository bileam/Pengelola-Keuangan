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
    <div className="w-full p-2 rounded  flex flex-col gap-4 justify-center">
      <div className="flex md:flex-row flex-col justify-between gap-2 bg-white px-6 py-2 rounded">
        <div className="flex lg:gap-20 items-center md:justify-start justify-between">
          <h1 className="text-[#a6a0a0]">Tahun</h1>
          <select name="" id="" className="px-2 outline-none">
            <option value="">2025</option>
          </select>
        </div>
        <div className="flex lg:sgap-20 items-center md:justify-start justify-between">
          <h1 className="text-[#a6a0a0]">Bulan</h1>
          <select name="" id="" className="px-2 outline-none">
            <option value="" className="rounded">
              Januari
            </option>
          </select>
        </div>
        <div className="flex lg:gap-20 items-center md:justify-start justify-between">
          <h1 className="text-[#a6a0a0]">Minggu</h1>
          <select name="" id="" className="px-2 outline-none">
            <option value="">01-07 januari</option>
          </select>
        </div>

        <button className="outline py-1 px-2 rounded text-white bg-[#4c71b7] cursor-pointer">
          Tampilkan
        </button>
      </div>
      <div className="w-full h-70 flex flex-col justify-center gap-2 bg-white py-2 px-5 rounded">
        <h2 className="font-semibold ">Laporan Keuangan Tahunan</h2>
        <div className="flex gap-4 items-center text-white text-[0.9rem]">
          <button className="px-2  bg-[#4c71b7] rounded">Mingguan</button>
          <button className="text-black px-2 hover:bg-[#4c71b7] hover:text-white rounded transition duration-300 ">
            Bulanan
          </button>
          <button className="text-black px-2 hover:bg-[#4c71b7] hover:text-white rounded transition duration-300">
            Tahunan
          </button>
        </div>
        <ResponsiveContainer width="98%" height="70%">
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
    </div>
  );
};

export default Chart;

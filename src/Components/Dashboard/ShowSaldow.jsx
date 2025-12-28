import {
  addSaldoPerBulan,
  getSummaryTahunan,
  getStatusKeuangan,
} from "../../Utils/keuanganLogic";

const ShowSaldow = ({ data }) => {
  const summary = getSummaryTahunan(data);
  const saldoAkhir = summary.totalPemasukan - summary.totalPengeluaran;
  const status = getStatusKeuangan(saldoAkhir);
  return (
    <div className="flex flex-col gap-3">
      <div>
        {" "}
        <h1 className="md:text-[4rem] text-2xl">Selamat datang MR.Hallo</h1>
      </div>
      <div className="flex  flex-wrap  md:flex-nowrap md:flex-row justify-start  gap-2 md:gap-6 ">
        <div className="py-5 md:px-5 px-2 flex flex-col  bg-white shadow rounded text-[1rem] hover:scale-105 transition duration-500">
          <h1>Total Pemasukan</h1>
          <h1 className="text-[2rem]">
            {" "}
            {summary.totalPemasukan.toLocaleString("id-ID")}
          </h1>
        </div>
        <div className="py-5 md:px-5 px-2 flex flex-col bg-white shadow rounded text-[1rem] hover:scale-105 transition duration-500">
          <h1>Saldo Sekarang</h1>
          <h1 className="text-[2rem] text-[#03369d]">
            {saldoAkhir.toLocaleString("id-ID")}
          </h1>
        </div>
        <div className="py-5 md:px-5 px-2 flex flex-col bg-white shadow rounded text-[1rem] hover:scale-105 transition duration-500">
          <h1>Pengeluaran</h1>
          <h1 className="text-[2rem] text-red-500">
            {summary.totalPengeluaran.toLocaleString("id-ID")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShowSaldow;

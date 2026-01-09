import { useEffect, useState } from "react";
import {
  addSaldoPerBulan,
  getSummaryTahunan,
  getStatusKeuangan,
} from "../../Utils/keuanganLogic";
import axios from "axios";

const ShowSaldow = ({ data }) => {
  const summary = getSummaryTahunan(data);
  const saldoAkhir = summary.totalPemasukan - summary.totalPengeluaran;
  const status = getStatusKeuangan(saldoAkhir);
  

 

  return (
    <div className="flex flex-col gap-3 mt-5">
      {/* <div>
        {" "}
        <h1 className="md:text-[4rem] text-2xl">Selamat datang MR.Hallo</h1>
      </div> */}

      <div className="flex  flex-wrap  md:flex-nowrap md:flex-row justify-start  gap-2 md:gap-6 ">
        <div className="py-3 md:px-7 px-2  flex flex-col  justify-center  bg-white shadow rounded text-[1rem] hover:scale-105 transition duration-500">
          <h1>Saldo</h1>
          <h1 className="text-[1.2rem] text-[#4fa15c]">
            {saldoAkhir.toLocaleString("id-ID")}
          </h1>
        </div>
        <div className="py-3 md:px-7 px-2  flex flex-col  justify-center  bg-white shadow rounded text-[1rem] hover:scale-105 transition duration-500">
          <h>Pemasukan </h>
          <h1 className="text-[1.2rem] text-[#2d8380]">
            {" "}
            {summary.totalPemasukan.toLocaleString("id-ID")}
          </h1>
        </div>
        <div className="py-3 md:px-7 px-2  flex flex-col  justify-center  bg-white shadow rounded text-[1rem] hover:scale-105 transition duration-500">
          <h1>Pengeluaran</h1>
          <h1 className="text-[1.2rem] text-[#cd5350]">
            {summary.totalPengeluaran.toLocaleString("id-ID")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ShowSaldow;

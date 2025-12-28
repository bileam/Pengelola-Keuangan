// Hitung saldo per bulan
export const addSaldoPerBulan = (data) => {
  return data.map((item) => ({
    ...item,
    saldo: item.pemasukan - item.pengeluaran,
  }));
};

// Hitung ringkasan tahunan
export const getSummaryTahunan = (data) => {
  return data.reduce(
    (acc, item) => {
      acc.totalPemasukan += item.pemasukan;
      acc.totalPengeluaran += item.pengeluaran;
      return acc;
    },
    { totalPemasukan: 0, totalPengeluaran: 0 }
  );
};
// export const withSaldo = (data) =>
//   data.map((item) => ({
//     ...item,
//     saldo: item.pemasukan - item.pengeluaran,
//   }));

export const withSaldo = (data) =>
  data.map((item) => ({
    ...item,
    saldo: item.pemasukan - item.pengeluaran,
  }));

// Tentukan status keuangan
export const getStatusKeuangan = (saldo) => {
  return saldo >= 0 ? "Surplus" : "Defisit";
};

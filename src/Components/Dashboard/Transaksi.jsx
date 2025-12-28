const Transaksi = () => {
  return (
    <div className="w-full shadow bg-white rounded p-5 flex flex-col gap-5">
      <div className="flex justify-between">
        <h1 className="text-[1.3rem]">Transaksi</h1>
        <button className="py-2 px-4 bg-[#03369d] transition duration-300 hover:bg-blue-600 rounded-lg  cursor-pointer text-white">
          Add Transaksi
        </button>
      </div>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base ">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b ">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Tanggal
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Deskripsi
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Jumlah
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                09 januari 2025
              </th>
              <td className="px-6 py-4">Untuk makan</td>
              <td className="px-6 py-4"> pengeluaran</td>
              <td className="px-6 py-4">30000</td>
            </tr>
            <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                09 januari 2025
              </th>
              <td className="px-6 py-4">Untuk makan</td>
              <td className="px-6 py-4"> pengeluaran</td>
              <td className="px-6 py-4">30000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Transaksi;

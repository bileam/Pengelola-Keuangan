const SemuaList = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className=" px-2 py-2 bg-white rounded flex justify-between items-center">
        <div className="grid grid-cols-2 gap-5">
          <select
            className="inline-block py-2 px-2  border border-[#cdcdcd]  rounded "
            name=""
            id=""
          >
            <option value="">12 april 2025</option>
          </select>
          <select
            name=""
            id=""
            className="inline-block py-2 px-2 border border-[#cdcdcd] rounded"
          >
            <option value="">Semua ketegori</option>
          </select>
        </div>
        <div>
          <button className="py-2 px-4 bg-[#03369d] transition duration-300 hover:bg-blue-600 rounded-lg  cursor-pointer text-white">
            Add Transaksi
          </button>
        </div>
      </div>
      <div className="px-2 py-5 bg-white">
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
    </div>
  );
};

export default SemuaList;

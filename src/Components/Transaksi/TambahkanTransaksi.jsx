const TambahkanTransaksi = () => {
  return (
    <div className="text-[0.9rem] ">
      <form action="" className="flex md:gap-10 gap-2  ">
        <div className="w-full gap-1 flex-col flex ">
          <input
            type="date"
            placeholder="Tanggal "
            className="outline-none  border-b "
          />
          <select
            className="
      w-full appearance-none
      border-b 
      bg-white px-2 py-2 pr-10
      text-sm text-gray-700
     
      outline-none
    "
          >
            <option>Pilih Dompet </option>
            <option>Cash</option>
            <option>Bca</option>
            <option>Bri</option>
          </select>
          <input
            type="text"
            placeholder="Deskription"
            className="outline-none  "
          />
        </div>
        <div className="w-full flex-col flex gap-1">
          <select
            className="
      w-full appearance-none
      border-b 
      bg-white px-2 py-2 pr-10
      text-sm text-gray-700
     
      outline-none
    "
          >
            <option>Kategori </option>
            <option>Makan</option>
            <option>gaji</option>
            <option>Transport</option>
          </select>

          {/* <select
            className="
      w-full appearance-none
      border-b 
      bg-white px-2 py-2 pr-10
      text-sm text-gray-700
     
      outline-none
    "
          >
            <option>Type </option>
            <option>Income </option>
            <option>Expense </option>
          </select> */}

          <input type="text" placeholder="jumlah" className="outline-none  " />
          <button
            type="submit"
            className="w-60 bg-blue-600 text-white cursor-pointer"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahkanTransaksi;

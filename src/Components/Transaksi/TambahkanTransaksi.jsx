const TambahkanTransaksi = () => {
  return (
    <div className="text-[0.9rem] mt-5">
      <form action="" className="flex md:gap-10 gap-2  ">
        <div className="w-full gap-2 flex-col flex ">
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
        <div className="w-full flex-col flex gap-2">
          <input type="text" placeholder="type" className="outline-none  " />
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

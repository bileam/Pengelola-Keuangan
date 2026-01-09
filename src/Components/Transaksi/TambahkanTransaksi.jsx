import axios from "axios";
import { useEffect, useState } from "react";

const TambahkanTransaksi = () => {
  const [datas, setDatas] = useState([]);
  const [dataKategori, setKategori] = useState([]);

  const getAllDompet = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dompet/get");
      // console.log(response.data);
      setDatas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllKategori = async () => {
    try {
      const response = await axios.get("http://localhost:3000/kategori/get");
      setKategori(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDompet();
    getAllKategori();
  }, []);

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
            {/* metode */}
            <option >Pilih Metode </option>
            {datas.map((item, index) => (
              <option key={index} value={item._id}>
                {item.nama}
              </option>
            ))}
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
            <option >Kategori </option>
            {dataKategori.map((item, index) => (
              <option key={index} value={item._id}>
                {item.nama}
              </option>
            ))}
          </select>
          <input
            type="Number"
            placeholder="jumlah"
            className="outline-none  "
          />
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

import { useEffect, useState } from "react";
import gambar from "../../assets/Icon2/laporan2.svg";
import axios from "axios";
const ListDompet = () => {
  const [datas, setDatas] = useState([]);

  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/dompet/get");
      setDatas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, [datas]);

  const handleHapus = async (id) => {
    console.log(id);
    console.log(datas);
    try {
      await axios.delete(`http://localhost:3000/dompet/delete/${id}`);
      alert("data berhasil di hapus");
    } catch (error) {
      console.log(error);
      alert("data gagal di hapus ada masaalah");
    }
  };
  return (
    <div className="bg-white p-5 rounded">
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base flex flex-col gap-5">
        <div className="text-[0.8rem] hidden md:flex justify-between px-5">
          <h1 className="text-[#606475]">Catatan belanja waktu</h1>
          <div className="flex gap-3">
            <select name="" id="" className="outline-none px-5">
              <option value="">tanggal</option>
            </select>
            <select name="" id="" className="outline-none px-5">
              <option value="">Nama Dompet</option>
            </select>
            <button className="px-10 py-1 text-white bg-green-800 rounded cursor-pointer hover:bg-green-700 active:bg-green-900 transform duration-300 transition-colors">
              Cari
            </button>
          </div>
        </div>
        <table className="w-full text-[0.8rem]  rtl:text-center text-body text-center">
          <thead className="text-sm text-body bg-neutral-secondary-medium border-b ">
            <tr>
              <th scope="col" className="px-6 py-3 font-medium">
                Nama Dompet
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Saldo
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {datas.map((item, index) => (
              <tr
                key={index}
                className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  {item.nama}
                </th>
                <td>{item.saldo.toLocaleString("id-ID")}</td>

                <td className="">
                  <button
                    className="cursor-pointer"
                    onClick={() => handleHapus(item._id)}
                  >
                    hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDompet;

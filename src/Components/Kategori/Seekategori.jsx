import axios from "axios";
import { useEffect, useState } from "react";

const Seekategori = () => {
  const [datas, setDatas] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get("http://localhost:3000/kategori/get");
      setDatas(response.data);
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <div className="px-2 py-5 bg-white rounded ">
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base flex flex-col gap-5">
          <div className="text-[0.8rem] hidden md:flex justify-between px-5">
            <h1 className="text-[#606475]">Catatan belanja waktu</h1>
            <div className="flex gap-3">
              <select name="" id="" className="outline-none px-5">
                <option value="">tanggal</option>
              </select>
              <select name="" id="" className="outline-none px-5">
                <option value="">Kategori</option>
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
                  Kategori
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Type
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
                  <td className="px-6 py-4 text-center flex justify-center">
                    <h1
                      className={`${
                        item.tipe === "income" ? "bg-green-800 " : "bg-red-600"
                      }  rounded-full w-14 text-white `}
                    >
                      {item.tipe}
                    </h1>
                  </td>

                  <td className="px-6 py-4">hapus || edit</td>
                </tr>
              ))}
              {/* <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  Gaji
                </th>
                <td className="px-6 py-4 text-center flex justify-center">
                  <h1 className="bg-red-600  b rounded-full w-14 text-white">
                    Income
                  </h1>
                </td>

                <td className="px-6 py-4">hapus || edit</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Seekategori;

import { useState } from "react";
import TambahkanTransaksi from "./TambahkanTransaksi";
import donw from "../../assets/Icon/down.svg";
import top from "../../assets/Icon/up.svg";

const SemuaList = () => {
  const [add, setAdd] = useState(true);
  return (
    <div className="flex flex-col gap-5 mt-2">
      <div className=" px-2 py-2 bg-white rounded flex flex-col  ">
        <div className="flex justify-between w-full">
          <div className="grid grid-cols-2 gap-5 text-[0.9rem] ">
            <h1>silakan mulai transaksi anda...</h1>
            {/* <select
            className="inline-block py-2 px-5   outline-none border-[#cdcdcd]  rounded "
            name=""
            id=""
          >
            <option value="" className="rounded">
              12 april 2025
            </option>
          </select>
          <select
            name=""
            id=""
            className="inline-block py-2 px-2  border-[#cdcdcd] rounded outline-none"
          >
            <option value="">Semua ketegori</option>
          </select> */}
          </div>
          <div>
            <button
              onClick={() => setAdd((prev) => !prev)}
              className="py-1 px-2 bg-[#397cf7] text-[0.9rem]  transition duration-300 hover:bg-blue-600 rounded-lg  cursor-pointer text-white"
            >
              <img
                src={donw}
                alt=""
                className={`${
                  add ? "rotate-0" : "rotate-180"
                } transform transition duration-500 ease-in-out`}
              />
            </button>
          </div>
        </div>
        <div
          className={`${
            add
              ? "md:max-h-60 max-h-100 opacity-100 delay-200"
              : "max-h-0 opacity-0"
          } overflow-hidden transform transition duration-700 ease-in-out`}
        >
          <TambahkanTransaksi />
        </div>
      </div>
      <div>
        <div className="text-[0.8rem] md:hidden flex flex-col justify-between px-5">
          <h1 className="text-[#606475]">Catatan belanja waktu</h1>
          <div className="flex gap-3 justify-between">
            <select name="" id="" className="outline-none pr-5">
              <option value="">tanggal</option>
            </select>
            <select name="" id="" className="outline-none pr-5">
              <option value="">Kategori</option>
            </select>
            <button className="px-10 py-1 text-white bg-green-800 rounded cursor-pointer hover:bg-green-700 active:bg-green-900 transform duration-300 transition-colors">
              Cari
            </button>
          </div>
        </div>
      </div>
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
                  Tanggal
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Kategori
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Dompet
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Tipe
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Jumlah
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  02-05-2025
                </th>
                <td className="px-6 py-4 text-center">
                  <h1 className="bg-red-600  rounded-full w-14 text-white">
                    makan
                  </h1>
                </td>
                <td className="px-6 py-4"> Cash</td>
                <td className="px-6 py-4 text-center">
                  {" "}
                  <h1 className="bg-red-600  rounded-full w-15 text-white">
                    Expense
                  </h1>
                </td>
                <td className="px-6 py-4">- 50.000</td>
                <td className="px-6 py-4">hapus || edit</td>
              </tr>
              <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                >
                  03-05-2025
                </th>
                <td className="px-6 py-4 text-center">
                  <h1 className="bg-green-800  rounded-full w-14 text-white">
                    Gaji
                  </h1>
                </td>
                <td className="px-6 py-4"> BCA</td>
                <td className="px-6 py-4 text-center">
                  {" "}
                  <h1 className="bg-green-800  rounded-full w-15 text-white">
                    Income
                  </h1>
                </td>
                <td className="px-6 py-4">+ 150.000</td>
                <td className="px-6 py-4">hapus || edit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SemuaList;

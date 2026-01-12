import { useEffect, useState } from "react";
import TambahkanTransaksi from "./TambahkanTransaksi";
import donw from "../../assets/Icon/down.svg";
import top from "../../assets/Icon/up.svg";
import axios from "axios";

const SemuaList = () => {
  const [dataskita, setdataskita] = useState([]);
  const [loading, setLoading] = useState(true);
  const [warna, setWarna] = useState("");
  const [kategori, setKategori] = useState([]);
  const [add, setAdd] = useState(false);

  const [err, setErr] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/transaksi/get");
      setdataskita(res.data.data);
      const tipe = res.data.data.map((item) => item.tipeKategori);
      setWarna(tipe);
    } catch (error) {
      setErr(error.message);
    } finally {
      setLoading(false);
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
    getData();
    getAllKategori();
  }, [dataskita]);
  // console.log(warna);

  const handledelete = async (id) => {
    // console.log("di tekan : ", id);
    try {
      const hapus = await axios.delete(
        `http://localhost:3000/transaksi/delete/${id}`
      );
      if (hapus) {
        alert("data berhasil di hapus");
      }
    } catch (error) {
      alert("gagal");
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-2">
      <div className=" px-2 py-2 bg-white rounded flex flex-col  ">
        <div className="flex justify-between w-full items-center text-[#918c8c]">
          <div className="grid grid-cols-2 gap-5 text-[0.9rem] ">
            <h1>silakan mulai transaksi anda...</h1>
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
          <h1 className="text-[#606475]">Catatan belanja waktu...</h1>
          <div className="flex gap-3 justify-between">
            <select name="" id="" className="pr-5">
              <option value="">tanggal kita</option>
            </select>
            <select name="" id="" className="outline-none pr-5">
              <option value="">Kategori</option>
              {/* <option value="">tes</option>  */}
              {/* {kategori.map((item, index) => (
                <option key={index} value={item._id}>
                  {item.nama}
                </option>
              ))} */}
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
            <h1 className="text-[#606475]">Catatan belanja waktu....</h1>
            <div className="flex gap-3">
              <select name="" id="" className="outline-none px-5">
                <option value="">tanggal</option>
              </select>
              <select name="" id="" className="outline-none px-5">
                <option value="" disabled className="disabled">
                  Kategori
                </option>
                {kategori.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.nama}
                  </option>
                ))}
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
                  Deskripsi
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-center ">
              {dataskita.map((item, index) => (
                <tr
                  key={index}
                  className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                  >
                    {item.tanggal ? item.tanggal.split("T")[0] : "0"}
                  </th>
                  <td className="px-6 py-4 text-center">
                    <h1
                      className={`${
                        item.tipeKategori === "expense"
                          ? "bg-red-600"
                          : "bg-green-800"
                      }  rounded-full  text-white`}
                    >
                      {item.kategori}
                    </h1>
                  </td>
                  <td className="px-6 py-4">{item.dompet}</td>
                  <td className="px-6 py-4 text-center">
                    {" "}
                    <h1
                      className={`${
                        item.tipeKategori === "expense"
                          ? "bg-red-600"
                          : "bg-green-800"
                      } rounded-full w-15 text-white`}
                    >
                      {item.tipeKategori}
                    </h1>
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    <span
                      className={`${
                        item.tipeKategori === "expense"
                          ? "text-red-600"
                          : "text-green-800"
                      }
                      }  font-extrabold`}
                    >
                      {item.tipeKategori === "income" ? "+" : "-"}
                    </span>{" "}
                    {item.jumlah.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-4">{item.deskripsi}</td>
                  <td className="px-6 py-4">
                    <button
                      className="cursor-pointer"
                      onClick={() => handledelete(item._id)}
                    >
                      {" "}
                      hapus{" "}
                    </button>{" "}
                    || <button> edit </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SemuaList;

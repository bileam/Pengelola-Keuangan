import { useState } from "react";
import donw from "../../assets/Icon/down.svg";
import axios from "axios";
const Addkategori = () => {
  const [add, setAdd] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    tipe: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    try {
      await axios.post("http://localhost:3000/kategori/post", form);
      alert("data berhasil di tambahkan");
    } catch (error) {
      alert("data gagal di tambahkan ");
      console.log(error);
    }
  };

  const handleDelete = () => {};

  return (
    <div className="bg-white p-2 rounded">
      <div className="flex flex-col gap-2 ">
        <div className="flex items-center justify-between">
          <h1 className="text-[#606475] text-[0.8rem]">
            Tambahkan Kategori anda
          </h1>
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
        <div
          className={`overflow-hidden ${
            add ? "h-auto opacity-85 delay-300" : "h-0 opacity-0"
          } transition duration-500 `}
        >
          <div className={``}>
            <form
              action=""
              className="flex  gap-2 flex-col  "
              onSubmit={handlesubmit}
            >
              <div className="w-full gap-1 flex-col flex ">
                <input
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  type="text"
                  placeholder="Kategori "
                  className="outline-none  border-b "
                />

                <select
                  name="tipe"
                  value={form.tipe}
                  onChange={handleChange}
                  className="
      w-full appearance-none
      border-b 
      bg-white px-2 py-2 pr-10
      text-sm text-gray-700
     
      outline-none
    "
                >
                  {/* metode */}
                  <option>Pilih Metode </option>
                  <option value="income"> income </option>
                  <option value="expense">expense </option>
                </select>
              </div>
              <button
                type="submit"
                className="w-60 bg-blue-600 text-white cursor-pointer mx-auto"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addkategori;

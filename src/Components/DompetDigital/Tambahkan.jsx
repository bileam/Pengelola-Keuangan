import { useState } from "react";
import gambar from "../../assets/Icon/down.svg";
import axios from "axios";
const Tambahkan = () => {
  const [Up, setUp] = useState(true);
  const [form, setForm] = useState({
    nama: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Handlesubmit = async (e) => {
    e.preventDefault();
    // console.log(form);
    try {
      await axios.post("http://localhost:3000/dompet/post", form);
      alert("data berhasil di tambahkan ");
    } catch (error) {
      alert("data gagal di simpan");
      console.log(error);
    }
  };
  return (
    <div className="bg-white rounded py-2 px-2">
      <div className="flex justify-between items-center">
        <h1 className="text-[#918c8c] text-[0.8rem]">
          Tambahkan Dompet Digital...
        </h1>
        <button
          onClick={() => setUp((prev) => !prev)}
          className="bg-blue-600 p-1 rounded-xl cursor-pointer"
        >
          <img
            src={gambar}
            alt=""
            className={`${
              Up ? "rotate-0" : "rotate-180"
            } transition duration-200`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden ${
          Up ? "max-h-0" : "max-h-auto "
        } transition duration-500 `}
      >
        <form action="" className="flex gap-2" onSubmit={Handlesubmit}>
          <input
            name="nama"
            value={form.nama}
            onChange={handleChange}
            type="text"
            placeholder="Masukkan dompet digital (cash,bri,bca dan lainya...) "
            className="outline-none  border-b "
          />
          <button
            type="submit"
            className="bg-blue-800 active:bg-blue-600 text-white transition-colors duration-500 cursor-pointer"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambahkan;

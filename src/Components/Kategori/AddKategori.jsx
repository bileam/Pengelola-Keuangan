import { useState } from "react";
import donw from "../../assets/Icon/down.svg";
const Addkategori = () => {
  const [add, setAdd] = useState(true);
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
            <form action="" className="flex  gap-2 flex-col  " onChange="">
              <div className="w-full gap-1 flex-col flex ">
                <input
                  type="text"
                  placeholder="Kategori "
                  className="outline-none  border-b "
                />

                <input
                  type="text"
                  placeholder="type"
                  className="outline-none  "
                />
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

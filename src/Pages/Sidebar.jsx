import logo from "../assets/Icon/LogoDompet.svg";
import laporanlg from "../assets/Icon/logolaporan.svg";
import laporan from "../assets/Icon/laporan.svg";
import transaksi from "../assets/Icon/transaksi.svg";
import dashboard from "../assets/Icon/dasboar.svg";
import kategori from "../assets/Icon/category.svg";
import dompet2 from "../assets/icon2/dompet2.svg";
// import dom from "../assets/icon/dompet.svg";

import react from "../assets/react.svg";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Dashboard from "./Dashboard";
import Transaksi from "./Transaksi";
import Laporan from "./Laporan";
import { useNavigate } from "react-router-dom";
import Dompet from "./Dompet";
import Kategori from "./Kategori";

const Sidebar = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  const [burger, setBurger] = useState(false);
  const [selectDisplay, setSelectDisplay] = useState("dashboard");

  let display;

  if (selectDisplay === "dashboard") {
    display = <Dashboard />;
  } else if (selectDisplay === "transaksi") {
    display = <Transaksi />;
  } else if (selectDisplay === "laporan") {
    display = <Laporan />;
  } else if (selectDisplay === "kategori") {
    display = <Kategori />;
  } else if (selectDisplay === "dompet") {
    display = <Dompet />;
  }

  return (
    <div className="flex md:flex-row flex-col min-h-screen  md:gap-0 gap-4  ">
      {/* ukuran md */}
      <div className=" md:flex hidden flex-col gap-5 bg-[#03369d] px-4 max-w-[15%] text-[#ffffff] py-5 relative ">
        <div className="flex items-center gap-2 sticky top-7">
          <img
            src={dompet2}
            alt=""
            className="h-8 w-10 object-center object-cover"
          />
          <h1 className="text-[1rem] lg:text-[0.8rem]">
            Pengelola Keuangan pribadi
          </h1>
        </div>
        <div className="flex text-[0.8rem] flex-col gap-2 items-start sticky top-20 ">
          <button
            onClick={() => setSelectDisplay("dashboard")}
            className={`flex gap-5  items-center cursor-pointer ${
              selectDisplay === "dashboard" ? "bg-blue-400 scale-105" : ""
            }  py-2 px-3 rounded-xl transition duration-300 hover:scale-105 hover:bg-blue-400`}
          >
            <img
              src={dashboard}
              alt=""
              className="object-center object-cover w-5 h-5  "
            />
            Dashboard
          </button>
          <button
            onClick={() => setSelectDisplay("transaksi")}
            className={`flex gap-5 ${
              selectDisplay === "transaksi" ? "bg-blue-400 scale-105" : ""
            }   items-center cursor-pointer hover:bg-blue-400 py-2 px-3 rounded-xl transition duration-300 hover:scale-105`}
          >
            <img
              src={transaksi}
              alt=""
              className="object-center object-cover w-5 h-5 "
            />
            Transaksi
          </button>
          {/* update */}
          <button
            onClick={() => setSelectDisplay("kategori")}
            className={`flex gap-5 ${
              selectDisplay === "kategori" ? "bg-blue-400 scale-105" : ""
            }   items-center cursor-pointer hover:bg-blue-400 py-2 px-3 rounded-xl transition duration-300 hover:scale-105`}
          >
            <img
              src={kategori}
              alt=""
              className="object-center object-cover w-5 h-5 "
            />
            Kategori
          </button>
          <button
            onClick={() => setSelectDisplay("dompet")}
            className={`flex gap-5 ${
              selectDisplay === "dompet" ? "bg-blue-400 scale-105" : ""
            }   items-center cursor-pointer hover:bg-blue-400 py-2 px-3 rounded-xl transition duration-300 hover:scale-105`}
          >
            <img
              src={Dompet}
              alt=""
              className="object-center object-cover w-5 h-5 "
            />
            Dompet
          </button>
          {/* end update */}
          <button
            onClick={() => setSelectDisplay("laporan")}
            className={`flex gap-5 ${
              selectDisplay === "laporan" ? "bg-blue-400 scale-105" : ""
            }  items-center cursor-pointer hover:bg-blue-400 py-2 px-3 rounded-xl transition duration-300 hover:scale-105`}
          >
            <img
              src={laporan}
              alt=""
              className="object-center object-cover w-5 h-5 "
            />
            Laporan
          </button>
        </div>
        {/* <button
          onClick={() => logout()}
          className="cursor-pointer fixed bottom-5 left-5 "
        >
          logout
        </button> */}
      </div>
      {/* ukuran table */}
      <div className="md:hidden block sticky top-0 bg-white z-100">
        <div className="flex items-center py-4 px-2 justify-between shadow">
          <button
            onClick={() => setBurger((prev) => !prev)}
            className="md:hidden  left-2 cursor-pointer gap-2 flex flex-col"
          >
            <div
              className={`w-7 border border-[#03369D]  ${
                burger ? "rotate-35" : ""
              } transition duration-500`}
            ></div>
            <div
              className={`w-7 border border-[#03369D] ${
                burger ? "opacity-0" : ""
              } transition duration-500 `}
            ></div>
            <div
              className={`w-7 border border-[#03369D] ${
                burger ? "-translate-y-5 -rotate-45" : ""
              }  transition duration-500`}
            ></div>
          </button>
          <div className="flex gap-2">
            <img src={logo} alt="" className="w-7 h-7" />
            <h1> Pengelola Keuangan</h1>
          </div>
          <div>
            <img src={laporanlg} alt="" className="w-7 h-7" />
          </div>
        </div>
        <div
          className={`bg-[#03369d] text-[#ffffff] rounded-r ${
            burger ? " translate-x-0 " : "-translate-x-full"
          }  px-3 py-3 fixed transition duration-500`}
        >
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelectDisplay("dashboard")}
              className="flex gap-5 cursor-pointer items-center hover:bg-blue-400 p-2 rounded-xl"
            >
              <img
                src={dashboard}
                alt=""
                className="object-center object-cover w-5 h-5 "
              />
              Dashboard
            </button>
            <button
              onClick={() => setSelectDisplay("transaksi")}
              className="flex gap-5 cursor-pointer items-center hover:bg-blue-400 p-2 rounded-xl transition duration-300 hover:scale-105"
            >
              <img
                src={transaksi}
                alt=""
                className="object-center object-cover w-5 h-5 "
              />
              Transaksi
            </button>
            <button
              onClick={() => setSelectDisplay("kategori")}
              className="flex gap-5 cursor-pointer items-center hover:bg-blue-400 p-2 rounded-xl transition duration-300 hover:scale-105"
            >
              <img
                src={kategori}
                alt=""
                className="object-center object-cover w-5 h-5 "
              />
              Kategori
            </button>
            <button
              onClick={() => setSelectDisplay("dompet")}
              className="flex gap-5 cursor-pointer items-center hover:bg-blue-400 p-2 rounded-xl transition duration-300 hover:scale-105"
            >
              <img
                src={Dompet}
                alt=""
                className="object-center object-cover w-5 h-5 "
              />
              Dompet
            </button>
            <button
              onClick={() => setSelectDisplay("laporan")}
              className="flex gap-5 cursor-pointer items-center hover:bg-blue-400 p-2 rounded-xl transition duration-300 hover:scale-105"
            >
              <img
                src={laporan}
                alt=""
                className="object-center object-cover w-5 h-5 "
              />
              Laporan
            </button>
          </div>
        </div>
      </div>
      {/* burger */}

      <div className="w-full">
        <div className="hidden md:block shadow w-full px-4 py-5 sticky top-0 bg-white z-100">
          <Navbar title="Dashboard" onClick={() => logout()} />
        </div>
        <div className="px-4 pb-6">
          {display}
          {/* <Dompet />
          <Kategori /> */}
          {/* <Laporan /> */}
          {/* <Dashboard /> */}
          {/* <Transaksi /> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

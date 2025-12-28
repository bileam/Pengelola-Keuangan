import contohGambar from "../assets/icon/LogoDompet.svg";
import das from "../assets/icon2/dompet2.svg";

const Navbar = ({ title }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={das} alt="" />
        <h1>{title}</h1>
      </div>
      <div className="border max-w-50 overflow-hidden  rounded p-2  flex gap-2 items-center">
        <img src={contohGambar} alt="" />
        <button>Selamat datang Hallo</button>
      </div>
    </div>
  );
};

export default Navbar;

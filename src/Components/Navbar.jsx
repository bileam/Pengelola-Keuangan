import das from "../assets/icon2/dompet2.svg";

const Navbar = ({ title, onClick }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={das} alt="" />
        <h1>{title}</h1>
      </div>
      <div className="border flex flex-col text-[0.7rem] max-w-50 overflow-hidden  rounded p-1  items-center">
        <button className="">Selamat datang Hallo</button>
        <div>
          <button onClick={onClick} className="cursor-pointer ">
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

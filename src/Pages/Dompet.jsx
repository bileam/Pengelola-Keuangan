import ListDompet from "../Components/DompetDigital/ListDompet";
import Tambahkan from "../Components/DompetDigital/Tambahkan";

const Dompet = () => {
  return (
    <div className="text-[0.9rem] mt-5 flex flex-col gap-7">
      <Tambahkan />
      <ListDompet />
    </div>
  );
};

export default Dompet;

import Addkategori from "../Components/Kategori/AddKategori";
import Seekategori from "../Components/Kategori/Seekategori";

const Kategori = () => {
  return (
    <div className="text-[0.9rem] mt-5 flex flex-col gap-7">
      <Addkategori />
      <Seekategori />
    </div>
  );
};

export default Kategori;

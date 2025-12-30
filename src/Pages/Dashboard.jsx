import Chart from "../Components/Dashboard/Chart";
import ShowSaldow from "../Components/Dashboard/ShowSaldow";
import Transaksi from "../Components/Dashboard/Transaksi";
import datakeuangan from "../Data/Keuangan.json";
import { withSaldo } from "../Utils/keuanganLogic";

const Dashboard = () => {
  const datawithsaldo = withSaldo(datakeuangan);

  return (
    <div className="flex flex-col gap-3">
      <ShowSaldow data={datakeuangan} />
      <Chart data={datawithsaldo} />
      {/* <Transaksi /> */}
    </div>
  );
};

export default Dashboard;

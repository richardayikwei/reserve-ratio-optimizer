import { addUsers, addBatteries } from "./dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectDashboard } from "./dashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardState = useSelector(selectDashboard);

  let usersBatteries = dashboardState.activeUsers * 2;
  let totalBatteriesNetwork =
    usersBatteries + dashboardState.batteriesSwapStations;
  let reserveRatio = totalBatteriesNetwork / usersBatteries;

  let additionalUsers =
    (dashboardState.batteriesSwapStations * 2 - usersBatteries) / 2;

  let realisticUsers = Math.floor(73 / 2);
  return (
    <section className="flex mt-16">
      <div className="w-80">
        <div className="">
          <h2 className="text-2xl">Reserve ratio:</h2>
          <p className="text-xl">
            {Number.isNaN(reserveRatio) ? 0 : reserveRatio.toFixed(4)}
          </p>
        </div>
        <div className="w-72 shadow-2xl text-center p-2 mt-10 flex flex-row">
          <div title="Additional users that can be added to network based on current batteries" className="w-36">
            <h2>Additional users:</h2>
            <p>{additionalUsers}</p>
          </div>
          <div title="Realistic users that can be added to network based on new batteries available" className="border-l-2 w-36" >
            <h2>Realitic users:</h2>
            <p>{realisticUsers}</p>
          </div>
        </div>
      </div>
      <div className="flex w-80">
        <div>
          <input
            placeholder={dashboardState.activeUsers}
            onChange={(e) => dispatch(addUsers(Number(e.target.value)))}
            title="Active users"
            id="users"
            type="number"
            className="bg-orange-400 flex flex-col h-36 text-7xl w-40 text-center placeholder:text-white"
          />
          <label htmlFor="users">Active users</label>
        </div>
        <div>
          <input
            placeholder={dashboardState.batteriesSwapStations}
            onChange={(e) => dispatch(addBatteries(Number(e.target.value)))}
            id="batteriesSwapStation"
            title="Swap station batteries"
            type="number"
            className="bg-orange-400 border-l-2 flex flex-col h-36 text-7xl w-40 text-center placeholder:text-white"
          />
          <label htmlFor="batteriesSwapStation">Swap station batteries</label>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

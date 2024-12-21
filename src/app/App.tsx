import Dashboard from "../features/dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <header className="flex justify-center p-3">
        <h1 className="text-3xl">Reserve Ratio Optimizer</h1>
      </header>
      <main className="w-2/3 mx-auto items-center flex flex-col">
        <Dashboard />
        <section></section>
      </main>
    </div>
  );
}

export default App;

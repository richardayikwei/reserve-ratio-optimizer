function App() {
  return (
    <div className="">
      <header className="flex justify-center p-3">
        <h1 className="text-3xl">Reserve Ratio Optimizer</h1>
      </header>
      <main className="w-2/3 mx-auto justify-center flex flex-col">
        <section className="flex mt-16">
          <div className="w-80">
            <div className="">
              <h2 className="text-2xl mb-3">Current Reserve ratio:</h2>
              <p className="text-xl"> 2.0 </p>
            </div>
            <div className="w-40 shadow-2xl text-center p-2 mt-10">
              <div title="Additional users that can be added to network">
                <h2>Additional users:</h2>
                <p>24</p>
              </div>
            </div>
          </div>
          <div className="flex w-80">
            <div>
              <input
                title="Active users"
                id="users"
                type="number"
                className="bg-orange-400 flex flex-col h-36 text-7xl w-40 text-center"
              />
              <label htmlFor="users">Active users</label>
            </div>
            <div>
              <input
                id="batteriesSwapStation"
                title="Swap station batteries"
                type="number"
                className="bg-orange-400 border-l-2 flex flex-col h-36 text-7xl w-40 text-center"
              />
              <label htmlFor="batteriesSwapStation">
                Swap station batteries
              </label>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}

export default App;

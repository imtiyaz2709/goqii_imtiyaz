
const Home = ({setData, data, handleSearch, query, setQuery}) => {

  return (
    <div className="flex flex-1 bg-gradient-to-r to-purple-700 from-pink-700 h-auto md:h-[400px] py-10 md:py-0 px-10 md:px-0 text-center justify-center items-center">
      <div className="w-full md:w-1/2 flex flex-col gap-2">
      <h1 className="text-white text-lg md:text-2xl font-semibold animate__animated animate__heartBeat">Find your Favorite Products</h1>
        <div className="flex flex-row md:gap-3 md:flex-col">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border flex-1 md:px-3 md:py-4 py-2 px-3 focus:outline-0 focus:border-0"
          placeholder="search by name"
        />
        <button
          type="submit"
          className="bg-green-600 text-white rounded px-3 py-2 self-center hover:bg-green-700 "
          placeholder="search by name"
          onClick={handleSearch}
        >
          Search
        </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

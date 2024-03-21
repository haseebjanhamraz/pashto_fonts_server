function SearchBox({ searchQuery, setSearchQuery, count }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={`Search - ${count} fonts`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="counter bg-white px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
      />
    </div>
  );
}

export default SearchBox;

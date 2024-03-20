function SearchBox({ searchQuery, setSearchQuery, count }) {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder={`Search in ${count} fonts`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBox;

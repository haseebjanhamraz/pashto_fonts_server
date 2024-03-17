import React, { useState, useEffect } from "react";
import FontBox from "./FontBox";
import Loader from "./Loader";

function FileList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/fonts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  const filteredData = data.filter((font) =>
    font.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search Fonts"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {filteredData.slice(0, visibleItems).map((font, index) => (
          <FontBox
            key={index}
            font={font}
            headingFont={`${font.replace(/\.[^/.]+$/, "")}`}
          />
        ))}
      </div>
      {visibleItems < filteredData.length && (
        <div className=" text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default FileList;

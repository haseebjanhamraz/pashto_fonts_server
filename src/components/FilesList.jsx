import React, { useState, useEffect } from "react";
import FontBox from "./FontBox";
import Loader from "./Loader";
import SearchBox from "./SearchBox";
import Counter from "./Counter";
import SampleText from "./SampleText";
import PashtoKeyboardLayout from "./PashtoKeyboardLayout";

function FileList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(15);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputData, setInputData] = useState("");
  const [keyboardInput, setKeyboardInput] = useState("");
  const [inputValue, setInputValue] = useState("");

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
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 15);
  };

  const handleInputChange = (text) => {
    setInputValue(inputValue);
    setInputData(text);
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
      <header className="flex flex-wrap lg:flex-row sm:flex-col gap-10 justify-center items-center p-20 mb-14 mt-10 border-dashed border-2 border-gray-300 rounded-lg">
        <Counter totalCount={data.length} />
        <SampleText onInputChange={handleInputChange} text={inputData} />
        <PashtoKeyboardLayout onInputChange={handleInputChange} />
        <SearchBox
          count={data.length}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </header>
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        {filteredData.slice(0, visibleItems).map((font, index) => (
          <FontBox
            key={index}
            text={inputData} // Pass inputData as text prop
            font={font}
            headingFont={`${font.replace(/\.[^/.]+$/, "")}`}
          />
        ))}
      </div>
      {visibleItems < filteredData.length && (
        <div className="text-center mt-10 p-10">
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mt-4"
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

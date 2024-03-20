import React, { useState } from "react";

const SampleText = ({ onInputChange }) => {
  const [inputData, setInputData] = useState("");
  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputData(newText);
    onInputChange(newText);
  };

  return (
    <input
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      type="text"
      value={inputData}
      onChange={handleInputChange}
      placeholder="Sample Text"
    />
  );
};

export default SampleText;

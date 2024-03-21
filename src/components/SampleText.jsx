import React, { useState, useEffect } from "react";

const SampleText = ({ onInputChange, keyboardInput }) => {
  const [inputData, setInputData] = useState("");

  // Update inputData when keyboardInput changes
  useEffect(() => {
    setInputData(keyboardInput);
  }, [keyboardInput]);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputData(newText);
    onInputChange(newText);
  };

  return (
    <>
      <input
        className="rtl px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder={"دلته د نمونې لپاره ليكل وكړئ"}
      />
    </>
  );
};

export default SampleText;

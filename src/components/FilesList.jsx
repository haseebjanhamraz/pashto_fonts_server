import React, { useState, useEffect } from "react";
import FontBox from "./FontBox";

function FileList() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {/* Map over the data array and render a FontBox component for each font */}
      {data.map((font, index) => (
        <FontBox
          key={index}
          font={font}
          headingFont={`${font.replace(/\.[^/.]+$/, "")}`}
        />
      ))}
    </div>
  );
}

export default FileList;

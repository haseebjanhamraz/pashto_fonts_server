import React from "react";
import Navbar from "./components/Navbar";
import FontBox from "./components/FontBox";
import FileList from "./components/FilesList";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 border-solid border-2 border-blue-100 rounded-lg m-5 items">
        <FileList />
      </div>
    </>
  );
};

export default App;

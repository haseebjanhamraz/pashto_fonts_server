import React from "react";
import FileList from "../components/FilesList";

function Home() {
  return (
    <div className="p-5 h-full border-solid border-2 border-blue-100 rounded-lg m-5 items">
      <FileList />
    </div>
  );
}

export default Home;

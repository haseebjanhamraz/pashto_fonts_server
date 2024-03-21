import React from "react";
import FileList from "../components/FilesList";
import Hero from "../pages/partials/Hero";
function Home() {
  return (
    <>
      <Hero />
      <div className="p-5 h-full bg-slate-200 border-solid border-2 border-blue-100 rounded-lg m-5 items">
        <FileList />
      </div>
    </>
  );
}

export default Home;

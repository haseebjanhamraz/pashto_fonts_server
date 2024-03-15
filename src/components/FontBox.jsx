import React from "react";
import "../index.css";

const FontBox = ({ font, headingFont }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-6 shadow-2xl rounded-sm w-60">
      <h1 className="font-bold text-gray-500">Font : {font}</h1>
      <p className="text-gray-400">$0</p>
      <div className="mt-3 mb-2 bg-slate-100 shadow-md h-40 rounded-sm overflow-hidden">
        <h1
          className={`text-4xl text-gray-700 p-2 py-4 mb-5`}
          style={{ fontFamily: headingFont }}
        >
          پښتو فونټس پښتو فونټس پښتو فونټس
        </h1>
      </div>
      <div className="flex items-center gap-2 mt-3">
        <div className="rounded-full w-max justify-center cursor-pointer py-1 px-2 text-center bg-green-800">
          <p className=" text-white text-sm uppercase"> Download</p>
        </div>
        <div className="rounded-full w-max justify-center cursor-pointer py-1 px-2 text-center bg-blue-500">
          <p className=" text-white text-sm uppercase"> Donate</p>
        </div>
      </div>
    </div>
  );
};

export default FontBox;

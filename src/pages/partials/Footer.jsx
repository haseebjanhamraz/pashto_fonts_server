import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 text-white px-2 py-4">
      <div className="bg-gray-200 rounded-md p-3 mt-4 mb-3">
        <img src="./src/assets/KPCLogo.png" width={"150px"} alt="KPC Logo" />
      </div>
      <p>
        All rights reserved with{" "}
        <a href="https://kpcybers.com">
          <span className="hover:text-blue-800 font-bold cursor-pointer">
            Khyber Cybers (Pvt.) Ltd. - (KP Cybers) &copy; 2024.
          </span>
        </a>
      </p>
      <p className="text-sm">
        - Not a single line of this website can be reproduced or used without
        the written permission of KPC.
      </p>
    </div>
  );
};

export default Footer;

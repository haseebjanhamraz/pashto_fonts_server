import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white px-2 py-4">
      <p>
        All rights reserved with{" "}
        <a href="https://kpcybers.com">
          <span className="hover:text-blue-800 font-bold cursor-pointer">
            Khyber Cybers (Pvt.) Ltd. - (KP Cybers) &copy; 2024.
          </span>
        </a>
        <span className="ml-3 text-sm">
          Not a single line of this website can be reproduced or used without
          the written permission of KPC.
        </span>
      </p>
    </div>
  );
};

export default Footer;

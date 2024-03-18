import { FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const links = [
  {
    source: "Google Drive",
    url: "https://drive.google.com/file/d/1uFzbV4zURwFuRlD2ZY6-iCmYOo9MD6wH/view?usp=sharing",
  },
];

const WinKeyboardPreview = () => {
  return (
    <>
      <div className="flex gap-4 mt-10">
        <h3 className="text-2xl">Pashto Phonetic Keyboard (Windows)</h3>
        <FaWindows className="text-3xl text-blue-400" />
      </div>
      <div className="bg-yellow-100 p-4 w-fit rounded-md mt-4">
        <ul>
          <li>
            Developed by:{" "}
            <span className="text-gray-500 font-bold">Haseeb Alam</span>
          </li>
          <li>
            Customized by:{" "}
            <span className="text-gray-500 font-bold">Shafeeq Gigyani</span>
          </li>
          <li>
            Sponsored:{" "}
            <a href="https://kpcybers.com" target="_blank">
              <span className="text-gray-500 font-bold hover:text-blue-800">
                Khyber Cybers (Pvt.) Ltd.
              </span>
            </a>
          </li>
          <li>
            Operating System:{" "}
            <span className="text-blue-500 font-bold">
              Windows XP, Windows 7,8,10,11{" "}
            </span>
          </li>
          <li>
            Requirements:{" "}
            <a
              className="hover:text-pink-700 text-gray-400"
              href="https://www.win-rar.com/start.html?&L=0"
              target="_blank"
            >
              <span className="text-gray-500 font-bold hover:text-pink-700">
                WinRar
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="p-4 mt-2">
        <p className="text-gray-700 text-justify">
          The Pashto Phonetic Keyboard is not only a boon for users of various
          digital platforms but also extends its utility to Windows operating
          systems. With a dedicated Windows version, users can seamlessly
          integrate this keyboard layout into their computing experience,
          whether for professional tasks or personal communication. The Windows
          version offers additional features and customization options, allowing
          users to adapt the keyboard layout to suit their specific preferences
          and typing habits. Its compatibility with Windows environments ensures
          widespread accessibility and adoption, contributing to the
          preservation and enrichment of Pashto language usage in the digital
          age. Whether composing emails, documents, or social media posts, the
          Pashto Phonetic Keyboard for Windows empowers users to express
          themselves fluently and accurately in Pashto, fostering greater
          connectivity and cultural exchange.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <h4 className="text-gray-600 text-2xl font-bold">
          Windows Keyboard Preview
        </h4>
        <FaRegKeyboard className="text-gray-600 text-3xl" />
      </div>
      <div className="bg-blue-200 p-2 gap-5 flex-wrap shadow-lg m-5 flex items-center sm:justify-center lg:justify-center md:justify-center md:items-center rounded-md">
        <img
          src="../src/assets/Normal.jpg"
          alt="Keyboard Featured - Image missing"
          width={"350px"}
        />
        <img
          src="../src/assets/Shift.jpg"
          alt="Keyboard Featured - Image missing"
          width={"350px"}
        />
        <img
          src="../src/assets/AltShift.jpg"
          alt="Keyboard Featured - Image missing"
          width={"350px"}
        />
      </div>
      <h4 className="mt-10 text-gray-600 text-2xl font-bold">Download Links</h4>
      <ul>
        {links.map((link, index) => (
          <div
            key={index}
            className="ml-5 mt-4 bg-yellow-100 p-2 rounded-md w-fit flex gap-2 items-center text-red-500 hover:text-red-900 font-bold"
          >
            <a href={link.url} target="_blank">
              <li>{link.source}</li>
            </a>
            <FaExternalLinkAlt />
          </div>
        ))}
      </ul>

      <h4 className="mt-10 text-gray-600 text-2xl font-bold">
        How to install?
      </h4>
      <div className="p-3 border-y-2">
        <li>Run setup.exe as Administrator</li>
        <li>Select "Install" to proceed to next step</li>
        <li>Click "Close" to complete installation.</li>
        <li>
          You're done. Cogratulations! You have successfully installed Pashto
          Phonetic Keyboard
        </li>
      </div>

      <div className="flex gap-4 mt-10">
        <h3 className="text-2xl">Pashto Phonetic Keyboard (MacOS) v2.1</h3>
        <FaApple className="text-3xl" />
      </div>
      <div className="mix-blend-multiply">
        <img
          src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg"
          width={"300px"}
        />
      </div>
    </>
  );
};

export default WinKeyboardPreview;

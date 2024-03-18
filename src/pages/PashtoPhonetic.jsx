import { FaWindows } from "react-icons/fa";
import WinKeyboardPreview from "../components/WinKeyboardPreview";

const PashtoPhonetic = () => {
  return (
    <>
      <div className="bg-blue-100 p-10 w-full">
        <div className="flex gap-2">
          <div className="w-[800px]">
            <h1 className="text-3xl uppercase font-serif font-bold">
              Pashto Phonetic Keyboard
            </h1>
            <p className="p-4 text-justify text-gray-700 lg:text-base sm:text-sm">
              The Pashto Phonetic Keyboard is an invaluable tool designed to
              facilitate efficient typing and input in the Pashto language.
              Developed to align with the phonetic characteristics of Pashto,
              this keyboard layout enables users to type Pashto text easily by
              mapping phonetically similar Pashto characters to corresponding
              keys on a standard keyboard. It simplifies the typing process,
              particularly for those accustomed to typing in Roman script, by
              allowing them to type Pashto words as they sound. This keyboard
              layout enhances accessibility to Pashto language resources,
              promoting its usage in digital communication, education, and
              content creation. Its intuitive design empowers users to express
              themselves more effectively in Pashto across various digital
              platforms and applications.
            </p>
          </div>

          <div className="w-96 p-1 rounded-lg shadow-3xl">
            <img
              src="../src/assets/PashtoPhonetic.jpg"
              width={"500px"}
              alt="Pic"
            />
          </div>
        </div>
        <WinKeyboardPreview />
      </div>
    </>
  );
};

export default PashtoPhonetic;

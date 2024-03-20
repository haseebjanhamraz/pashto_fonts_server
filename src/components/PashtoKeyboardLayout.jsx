import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { FaKeyboard } from "react-icons/fa";

const PashtoKeyboardLayout = ({ onInputChange }) => {
  const [input, setInput] = useState("");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const keyboardRef = useRef();

  const onChange = (input) => {
    setInput(input);
    onInputChange(input); // Pass input value to parent component
  };

  const onKeyPress = (button) => {};

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.current.setInput(input);
  };

  const toggleKeyboard = () => {
    setInput("");
    setIsKeyboardVisible(!isKeyboardVisible);
  };

  const pashtoLayout = {
    default: [
      "خ ح چ ځ ج ث ټ ت پ ب ا",
      "ض ص ش س ښ ژ ز ړ ږ ر ذ ډ د",
      "ڼ ن م ل ګ ق ك غ ع ظ ط",
      "ے ۍ ئ ي ی ء ؤ و",
      "{bksp} {space}",
    ],
  };

  return (
    <div className="flex gap-2">
      <button onClick={toggleKeyboard}>
        <FaKeyboard className="text-2xl" />
      </button>
      <div className="flex items-center">
        <input
          disabled
          value={input}
          placeholder={"Pashto Virtual Keyboard"}
          onChange={onChangeInput}
        />
      </div>
      {isKeyboardVisible && (
        <Keyboard
          keyboardRef={(r) => (keyboardRef.current = r)}
          layout={pashtoLayout}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      )}
    </div>
  );
};

export default PashtoKeyboardLayout;

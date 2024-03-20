import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const PashtoKeyboardLayout = ({ onInputChange }) => {
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState("");
  const keyboardRef = useRef();

  const onChange = (input) => {
    setInput(input);
    onInputChange(input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.current.setInput(input);
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
    <div>
      <input
        type="text"
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r) => (keyboardRef.current = r)}
        layoutName={layoutName}
        layout={pashtoLayout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default PashtoKeyboardLayout;

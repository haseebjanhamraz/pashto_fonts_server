import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { FaKeyboard } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from "react-modal";

const PashtoKeyboardLayout = ({ onInputChange }) => {
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const keyboardRef = useRef();

  const onChange = (input) => {
    setInput(input);
    onInputChange(input); // Pass input value to parent component
  };

  const onKeyPress = (button) => {
    if (button === "{esc}") {
      setIsModalOpen(false);
    }
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboardRef.current.setInput(input);
  };

  const onClearInput = () => {
    setInput("");
  };

  const toggleModal = () => {
    setInput("");
    setIsModalOpen(!isModalOpen);
  };

  const pashtoLayout = {
    default: [
      "خ ح چ ځ ج ث ټ ت پ ب ا",
      "ض ص ش س ښ ژ ز ړ ږ ر ذ ډ د",
      "ڼ ن م ل ګ ق ك غ ع ظ ط",
      "ے ۍ ئ ي ی ء ؤ و",
      "{bksp} {space} {esc}",
    ],
  };

  return (
    <div className="flex gap-2">
      <button onClick={toggleModal}>
        <FaKeyboard className="text-2xl text-gray-400 hover:text-gray-950" />
      </button>
      <div className="flex items-center">
        <input
          disabled
          value={input}
          placeholder={"Pashto Virtual Keyboard"}
          onChange={onChangeInput}
        />
        {input !== "" && (
          <button onClick={onClearInput}>
            <IoIosCloseCircle />
          </button>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="modal" // Apply custom modal styles from index.css
      >
        <div className="keyboard-container">
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            layout={pashtoLayout}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PashtoKeyboardLayout;

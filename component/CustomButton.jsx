import React from "react";
import "./css/Propstest.css";
const CustomButton = ({ handle, page, text }) => {
  const customHandle = (number) => {
    handle(number);
  };
  return (
    <button onClick={() => customHandle(page)} className="buttonStyle">
      {text}
    </button>
  );
};

export default CustomButton;

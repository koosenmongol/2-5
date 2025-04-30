import React from "react";
import "./css/Propstest.css";
const CustomButton = (props) => {
  const customHandle = (number) => {
    props.handle(number);
  };
  return (
    <button onClick={() => customHandle(props.page)} className="buttonStyle">
      {props.text}
    </button>
  );
};

export default CustomButton;

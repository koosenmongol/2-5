import React, { useState } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import "./css/Propstest.css";
import Title from "./Title";
import CustomButton from "./CustomButton";
const PropsTest = (props) => {
  const [switchComponent, setSwitchComponent] = useState();
  const handleClick = (page) => {
    setSwitchComponent(page);
  };
  return (
    <div className="container">
      {isNaN(switchComponent) ? (
        <div>
          <Title>Props test</Title>
          <div>
            <CustomButton page={1} handle={handleClick} text={"Test1"} />
            <CustomButton page={2} handle={handleClick} text={"Test2"} />
          </div>
        </div>
      ) : switchComponent === 1 ? (
        <Test1 />
      ) : (
        <Test2 />
      )}
    </div>
  );
};

export default PropsTest;

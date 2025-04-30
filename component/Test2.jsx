import React from "react";
import Title from "./Title";
import { useState } from "react";
import Test1 from "./Test1";
import CustomButton from "./CustomButton";
import PropsTest from "./PropsTest";

const Test2 = () => {
  const [switchComponent, setSwitchComponent] = useState();
  const handleClick = (page) => {
    setSwitchComponent(page);
  };
  return (
    <div className="container">
      {isNaN(switchComponent) ? (
        <div>
          <Title>Test2</Title>
          <div>
            <CustomButton page={0} handle={handleClick} text={"Props"} />
            <CustomButton page={1} handle={handleClick} text={"Test1"} />
          </div>
        </div>
      ) : switchComponent === 0 ? (
        <PropsTest />
      ) : (
        <Test1 />
      )}
    </div>
  );
};

export default Test2;

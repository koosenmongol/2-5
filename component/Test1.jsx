import React, { useState } from "react";
import Title from "./Title";
import CustomButton from "./CustomButton";
import PropsTest from "./PropsTest";
import Test2 from "./Test2";

const Test1 = () => {
  const [switchComponent, setSwitchComponent] = useState();
  const handleClick = (page) => {
    setSwitchComponent(page);
  };
  return (
    <div className="container">
      {isNaN(switchComponent) ? (
        <div>
          <Title>Test1</Title>
          <div>
            <CustomButton page={0} handle={handleClick} text={"Props"} />
            <CustomButton page={2} handle={handleClick} text={"Test2"} />
          </div>
        </div>
      ) : switchComponent === 0 ? (
        <PropsTest />
      ) : (
        <Test2 />
      )}
    </div>
  );
};

export default Test1;

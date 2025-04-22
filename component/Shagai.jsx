import React, { useState } from "react";
import "./css/Shagai.css";
import mori from "../data/shagai/mori.jpg";
import honi from "../data/shagai/honi.jpg";
import temee from "../data/shagai/temee.jpg";
import yamaa from "../data/shagai/yamaa.jpg";
const Shagai = () => {
  const imageArray = [mori, honi, temee, yamaa];
  const [switchImage, setSwitchImage] = useState(imageArray);
  const handleSwitch = () => {
    {
      switchImage.map(
        (image, index) =>
          (switchImage[index] =
            imageArray[Math.floor(Math.random() * imageArray.length)])
      );
    }
    setSwitchImage([...switchImage]);
  };
  return (
    <div className="container">
      <div className="imageContainer">
        {switchImage.map((image, index) => (
          <img src={image} />
        ))}
      </div>
      <button className="styleButton" onClick={handleSwitch}>
        Шагай хаях
      </button>
    </div>
  );
};

export default Shagai;

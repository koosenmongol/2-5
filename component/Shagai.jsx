import React, { use, useState } from "react";
import "./css/Shagai.css";
import mori from "../data/shagai/mori.jpg";
import honi from "../data/shagai/honi.jpg";
import temee from "../data/shagai/temee.jpg";
import yamaa from "../data/shagai/yamaa.jpg";
import zurag4 from "../data/shagai/4.png";
import zurag3 from "../data/shagai/3.png";
import zurag2 from "../data/shagai/2.png";
const Shagai = () => {
  const imageArray = [mori, honi, temee, yamaa];
  const [merge, setMerge] = useState();
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
    if (
      switchImage[0] !== switchImage[1] &&
      switchImage[0] !== switchImage[2] &&
      switchImage[0] !== switchImage[2] &&
      switchImage[1] !== switchImage[2] &&
      switchImage[1] !== switchImage[3] &&
      switchImage[2] !== switchImage[3]
    )
      setMerge(zurag4);
    else if (
      switchImage[0] === switchImage[1] &&
      switchImage[1] === switchImage[2] &&
      switchImage[2] === switchImage[3]
    )
      setMerge(zurag4);
    else if (
      switchImage[0] == switchImage[1] &&
      switchImage[1] == switchImage[2] &&
      switchImage[2] != switchImage[3]
    )
      setMerge(zurag3);
    else if (
      switchImage[0] == switchImage[1] &&
      switchImage[1] == switchImage[3] &&
      switchImage[2] != switchImage[3]
    )
      setMerge(zurag3);
    else if (
      switchImage[0] == switchImage[2] &&
      switchImage[2] == switchImage[3] &&
      switchImage[2] != switchImage[1]
    )
      setMerge(zurag3);
    else if (
      switchImage[1] == switchImage[2] &&
      switchImage[2] == switchImage[3] &&
      switchImage[2] != switchImage[0]
    )
      setMerge(zurag3);
    else setMerge(zurag2);
  };
  return (
    <div className="container">
      {/* left */}
      <div className="left">
        <div className="imageContainer">
          {switchImage.map((image, index) => (
            <img src={image} />
          ))}
        </div>
        <button className="styleButton" onClick={handleSwitch}>
          Шагай хаях
        </button>
      </div>
      {/* right */}
      <div className="right">
        <img src={merge} alt="" />
      </div>
    </div>
  );
};

export default Shagai;

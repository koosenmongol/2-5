import React from "react";

import { TbPointFilled } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
import { flowerData } from "../data/Flower";
const FlowerDetail = ({ index, back }) => {
  return (
    <div className="containerDetial">
      <div style={{ display: "flex", alignItems: "center" }}>
        <p> {flowerData[index].discoverer}</p>
        <TbPointFilled size={10} />
        <p>{flowerData[index].year} </p>
      </div>
      <div className="innerContainer">
        <img className="imageStyle" src={flowerData[index].img} alt="" />
        <div className="Detail">
          <h1>
            Classifier: <span>{flowerData[index].classifier}</span>
          </h1>
          <h1>
            Bloom time: <span>{flowerData[index].bloomTime}</span>
          </h1>
          <h2>
            Rating: <span>{flowerData[index].rating}</span>
          </h2>
        </div>
      </div>
      <button className="button" onClick={back}>
        {" "}
        <FaArrowLeft />
        Back
      </button>
    </div>
  );
};

export default FlowerDetail;

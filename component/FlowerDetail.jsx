import React from "react";
import { movieData } from "../data/Movie";
import { TbPointFilled } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa";
const FlowerDetail = ({ index, back }) => {
  return (
    <div className="containerDetial">
      <div style={{ display: "flex", alignItems: "center" }}>
        <p>{movieData[index].year} </p>
        <TbPointFilled size={10} />
        <p> {movieData[index].time}</p>
      </div>
      <div className="innerContainer">
        <img className="imageStyle" src={movieData[index].image} alt="" />
        <div className="Detail">
          <h1>
            Directors: <span>{movieData[index].directer}</span>
          </h1>
          <h1>
            Writers: <span>{movieData[index].writers}</span>
          </h1>
          <h2>
            IMDB rating: <span>{movieData[index].Rating}</span>
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

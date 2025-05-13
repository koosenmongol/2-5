import React from "react";
import "./css/Movie.css";
const FlowerItem = ({ onemovie, onClick }) => {
  // ({image , name , description})
  return (
    <div onClick={onClick}>
      <img className="imageStyle" src={onemovie.img} alt="" />
      <div className="onemovieText">
        <p id="bold">{onemovie.name} </p>
        <p className="desc">{onemovie.description}</p>
      </div>
    </div>
  );
};

export default FlowerItem;

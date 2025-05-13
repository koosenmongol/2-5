import React from "react";
import "./css/Movie.css";
const MovieItem = ({ onemovie, onClick }) => {
  // ({image , name , description})
  return (
    <div onClick={onClick}>
      <img className="imageStyle" src={onemovie.image} alt="" />
      <div className="onemovieText">
        <p id="bold">{onemovie.name} </p>
        <p className="desc">{onemovie.description}</p>
      </div>
    </div>
  );
};

export default MovieItem;

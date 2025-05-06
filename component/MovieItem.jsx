import React from "react";
import "./css/Movie.css";
const MovieItem = ({ onemovie }) => {
  // ({image , name , description})
  return (
    <div>
      <img className="imageStyle" src={onemovie.image} alt="" />
      <div className="onemovieText">
        <p id="bold">{onemovie.name} </p>
        <p>{onemovie.description}</p>
      </div>
    </div>
  );
};

export default MovieItem;

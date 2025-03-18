import React, { useState } from "react";
import "./css/Movie.css";
import { movieData } from "../data/Movie";
import Review from "./Review";
import Like_dislike from "./Like_dislike";

const Movie = () => {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        Таньд санал болгох киноны жагсаалт
      </h1>
      <p style={{ textAlign: "center" }}>Адал явдалт, тулаант</p>
      <div className="boxcontainer">
        {movieData.map((onemovie, index) => (
          <div className="oneMovieStyle">
            <img className="imageStyle" src={onemovie.image} alt="" />
            <div className="onemovieText">
              <p id="bold">{onemovie.name} </p>
              <p>{onemovie.description}</p>
            </div>
            <Like_dislike />
            <Review />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;

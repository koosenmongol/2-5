import React from "react";
import "./css/Movie.css";
import { movieData } from "../data/Movie";
import Review from "./Review";

const Movie = () => {
  return (
    <div>
      <h1>Таньд санал болгох киноны жагсаалт</h1>
      <p>Адал явдалт, тулаант</p>
      <div className="container">
        {movieData.map((onemovie) => (
          <div className="oneMovieStyle">
            <img className="imageStyle" src={onemovie.image} alt="" />
            <div className="onemovieText">
              {" "}
              <p id="bold">{onemovie.name} </p>
              <p>{onemovie.description}</p>
            </div>
            <Review />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;

import React, { useState } from "react";
import "./css/Movie.css";
import { movieData } from "../data/Movie";
import Review from "./Review";
import Like_dislike from "./Like_dislike";
import MovieItem from "./MovieItem";

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
            <MovieItem onemovie={onemovie} />
            {/* <MovieItem img={onemovie.image} name={onemovie.name} desc={onemovie.description} */}
            <Like_dislike />
            <Review />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;

import React, { use, useState } from "react";
import "./css/Movie.css";
import { movieData } from "../data/Movie";
import Review from "./Review";
import Like_dislike from "./Like_dislike";
import MovieItem from "./MovieItem";
import MovieDetials from "./MovieDetials";
const Movie = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [movieIndex, setMovieIndex] = useState();
  const handleMovie = (index) => {
    setMovieIndex(index);
    setSelectedMovie(true);
  };
  const backHandle = () => {
    setSelectedMovie();
  };
  return (
    <div className="OutsideContainer">
      <h1 style={{ textAlign: "center" }}>
        Таньд санал болгох киноны жагсаалт
      </h1>
      <p style={{ textAlign: "center" }}>Адал явдалт, тулаант</p>
      {isNaN(selectedMovie) && (
        <div className="boxcontainer">
          {movieData.map((onemovie, index) => (
            <div className="oneMovieStyle">
              <MovieItem
                onemovie={onemovie}
                onClick={() => handleMovie(index)}
              />
              {/* <MovieItem img={onemovie.image} name={onemovie.name} desc={onemovie.description} */}
              <Like_dislike />
              <Review />
            </div>
          ))}
        </div>
      )}
      {selectedMovie && <MovieDetials index={movieIndex} back={backHandle} />}
    </div>
  );
};

export default Movie;

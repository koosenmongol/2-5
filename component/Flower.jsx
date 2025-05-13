import React, { use, useState } from "react";
import "./css/Movie.css";
import { movieData } from "../data/Movie";
import Review from "./Review";
import Like_dislike from "./Like_dislike";
import { flowerData } from "../data/Flower";
import FlowerItem from "./FlowerItem";
import FlowerDetail from "./FlowerDetail";

const Flower = () => {
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
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        Таньд санал болгох киноны жагсаалт
      </h1>
      <p style={{ textAlign: "center" }}>Адал явдалт, тулаант</p>
      {isNaN(selectedMovie) && (
        <div className="boxcontainer">
          {flowerData.map((onemovie, index) => (
            <div className="oneMovieStyle">
              <FlowerItem
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
      {selectedMovie && <FlowerDetail index={movieIndex} back={backHandle} />}
    </div>
  );
};

export default Flower;

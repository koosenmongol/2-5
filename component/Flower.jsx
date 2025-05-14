import React, { use, useState } from "react";
import "./css/Movie.css";
import { flowerData } from "../data/Flower";
import Review from "./Review";
import Like_dislike from "./Like_dislike";
import FlowerItem from "./FlowerItem";
import FlowerDetail from "./FlowerDetail";
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
        Таньд санал болгох цэцэгний жагсаалт
      </h1>
      <h2 style={{ textAlign: "center" }}>Бүх төрөл</h2>
      {isNaN(selectedMovie) && (
        <div className="boxcontainer">
          <div className="Boxinner">
            {flowerData.map((onemovie, index) => (
              <div className="oneMovieStyle">
                <FlowerItem
                  onemovie={onemovie}
                  onClick={() => handleMovie(index)}
                />
                <Like_dislike />
                <Review />
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedMovie && <FlowerDetail index={movieIndex} back={backHandle} />}
    </div>
  );
};

export default Movie;

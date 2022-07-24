import React from "react";
import MovieCard from "../MovieCard";

const CurrentList = (props) => {
  return (
    <div className="current-list-container">
      <div className="current-list-movies">
        {props.currentArr.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              setMovieId={props.setMovieId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CurrentList;

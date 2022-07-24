import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const handleClick = () => {
    props.setMovieId(props.id);
  };

  return (
    <div className="movie-card">
      <Link to={"/movie/" + props.id}>
        <img
          src={`https://image.tmdb.org/t/p/original/${props.poster}`}
          alt="movie"
          className="movie-img"
          onClick={handleClick}
        ></img>
      </Link>
    </div>
  );
};

export default MovieCard;

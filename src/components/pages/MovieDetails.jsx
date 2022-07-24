import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = (props) => {
  const trimInfo = (str, endIndex) => {
    return str.substring(0, endIndex);
  };

  const filterDirector = (directorArr) => {
    for (let i = 0; i < directorArr.length; i++) {
      if (directorArr[i] !== undefined) {
        return directorArr[i];
      }
    }
  };

  const getHours = (runtime) => {
    return Math.floor(runtime / 60);
  };

  const getMins = (runtime) => {
    return runtime % 60;
  };

  const styles = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movieDetails.backdropPath})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="movie-details-container">
      <div className="back-btn-container">
        <button className="back-btn">
          <Link to="/">
            <i class="fa-solid fa-circle-arrow-left"></i>
          </Link>
        </button>
      </div>
      <div className="movie-details-inner" style={styles}>
        <div className="poster-container">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.movieDetails.posterPath}`}
            alt="movie-poster"
            className="movie-poster"
          ></img>
        </div>
        <div className="detail-container">
          <h1 className="movie-title">{props.movieDetails.title}</h1>
          <span className="year-and-genre">
            {trimInfo(props.movieDetails.releaseDate, 4)}
            {" | "}
            {props.movieDetails.genres}
          </span>
          <h3 className="overview-title">Overview</h3>
          <p className="overview">{props.movieDetails.overview}</p>
          <p>
            Rating: <span className="rating">{props.movieDetails.rating}</span>
          </p>
          <p className="release-date">
            Release date: <span>{props.movieDetails.releaseDate}</span>
          </p>
          <p className="director">
            Directed by:{" "}
            <span>{filterDirector(props.movieDetails.director)}</span>
          </p>
          <p className="producer">
            Produced by: <span>{props.movieDetails.productionCompany}</span>
          </p>
          <p className="runtime">
            Runtime:{" "}
            <span>
              {getHours(props.movieDetails.runtime)}h{" "}
              {getMins(props.movieDetails.runtime)}m
            </span>
          </p>
          <p className="original-lang">
            Original Language:{" "}
            <span>{props.movieDetails.originalLanguage}</span>
          </p>
        </div>
      </div>
      <div className="cast-container">
        <h2 className="cast-title">Cast</h2>
        <div className="actor-container">
          {props.movieDetails.cast.map((actor) => (
            <div className="actor-card">
              <img
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt="actor-thumbnail"
                className="actor-img"
              />
              <h3 className="actor-name">{actor.name}</h3>
              <p className="character">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

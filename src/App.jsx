import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CurrentList from "./components/pages/CurrentList";
import MovieDetails from "./components/pages/MovieDetails";
import { Route, Routes, Link } from "react-router-dom";
import Loading from "./components/Loading";

import "./index.css";

const App = () => {
  const [activeList, setActiveList] = useState("Trending");
  const [currentArr, setCurrentArr] = useState([]);
  const [activeUrl, setActiveUrl] = useState(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`
  );

  const [isLoading, setIsLoading] = useState(false);

  const [searchedMovie, setSearchedMovie] = useState("");
  const [searchResultArr, setSearchResultArr] = useState([]);
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchedMovie}`;

  const [movieId, setMovieId] = useState(0);
  const [movieDetails, setMovieDetails] = useState({
    title: "",
    overview: "",
    posterPath: "",
    genres: [],
    originalLanguage: "",
    releaseDate: "",
    runtime: "",
    rating: "",
    cast: [],
    director: [],
    productionCompany: "",
    backdropPath: "",
  });
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`;

  const getCurrentList = () => {
    axios.get(activeUrl).then((response) => {
      setCurrentArr(response.data.results);
    });
  };

  const fetchSearch = () => {
    axios.get(searchUrl).then((response) => {
      setSearchResultArr(response.data.results);
    });
  };

  const fetchMovieDetails = () => {
    setIsLoading(true);
    axios.get(movieDetailsUrl).then((response) => {
      setMovieDetails({
        title: response.data.title,
        overview: response.data.overview,
        posterPath:
          "https://image.tmdb.org/t/p/original/" + response.data.poster_path,
        genres: response.data.genres.map((genre) => genre.name + " "),
        originalLanguage: response.data.original_language,
        releaseDate: response.data.release_date,
        runtime: response.data.runtime,
        rating: response.data.vote_average,
        cast: response.data.credits.cast.map((person) =>
          person.known_for_department === "Acting" ? person : ""
        ),
        director: response.data.credits.crew.map((person) => {
          if (person.known_for_department === "Directing") return person.name;
        }),
        productionCompany: response.data.production_companies[0].name,
        backdropPath: response.data.backdrop_path,
      });
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCurrentList();

    setMovieId(JSON.parse(window.sessionStorage.getItem("movieId")));
  }, [activeList]);

  useEffect(() => {
    if (movieId !== 0) {
      fetchMovieDetails();
    }

    window.sessionStorage.setItem("movieId", movieId);
  }, [movieId]);

  return (
    <div className="App">
      <Navbar />
      <Search
        searchedMovie={searchedMovie}
        setSearchedMovie={setSearchedMovie}
        fetchSearch={fetchSearch}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              currentArr={currentArr}
              setActiveList={setActiveList}
              setActiveUrl={setActiveUrl}
              setMovieId={setMovieId}
            />
          }
        />
        <Route
          path="/search/movie/query=:query"
          element={
            searchResultArr.length > 0 ? (
              <CurrentList
                currentArr={searchResultArr}
                id={movieId}
                setMovieId={setMovieId}
              />
            ) : (
              <div>
                <div className="back-btn-container">
                  <button className="back-btn">
                    <Link to="/">
                      <i class="fa-solid fa-circle-arrow-left"></i>
                    </Link>
                  </button>
                </div>
                <div className="no-results-div">
                  <h1 className="no-results">No results found</h1>
                </div>
              </div>
            )
          }
        />
        <Route
          path="/movie/:id"
          element={
            isLoading ? (
              <Loading />
            ) : (
              <MovieDetails movieDetails={movieDetails} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;

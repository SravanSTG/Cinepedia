import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
  const handleChange = (e) => {
    props.setSearchedMovie(e.target.value);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          className="search"
          type="text"
          placeholder="Search for movies"
          onChange={handleChange}
        />
      </div>
      <button className="search-btn" onClick={props.fetchSearch}>
        <Link to={"/search/movie/query=" + props.searchedMovie}>Search</Link>
      </button>
    </div>
  );
};

export default Search;

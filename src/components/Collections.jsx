import React, { useState } from "react";

const Collections = (props) => {
  const [isActive, setIsActive] = useState([true, false, false, false]);

  const toggleClass = (index) => {
    let newState = isActive;
    for (let i = 0; i < newState.length; i++) {
      newState[i] = i === index ? true : false;
    }

    setIsActive(newState);
  };

  const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`;
  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
  const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;

  return (
    <div className="collections">
      <div
        className={
          isActive[0] ? "collections-inner active" : "collections-inner"
        }
        onClick={() => {
          props.setActiveList("Trending");
          props.setActiveUrl(trendingUrl);
          toggleClass(0);
        }}
      >
        <i className="fa-solid fa-bolt trending-icon"></i>
        <p>TRENDING</p>
      </div>
      <div
        className={
          isActive[1] ? "collections-inner active" : "collections-inner"
        }
        onClick={() => {
          props.setActiveList("Now Playing");
          props.setActiveUrl(nowPlayingUrl);
          toggleClass(1);
        }}
      >
        <i className="fa-solid fa-film now-playing-icon"></i>
        <p>NOW PLAYING</p>
      </div>
      <div
        className={
          isActive[2] ? "collections-inner active" : "collections-inner"
        }
        onClick={() => {
          props.setActiveList("Top Rated");
          props.setActiveUrl(topRatedUrl);
          toggleClass(2);
        }}
      >
        <i className="fa-solid fa-star top-rated-icon"></i>
        <p>TOP RATED</p>
      </div>
      <div
        className={
          isActive[3] ? "collections-inner active" : "collections-inner"
        }
        onClick={() => {
          props.setActiveList("Upcoming");
          props.setActiveUrl(upcomingUrl);
          toggleClass(3);
        }}
      >
        <i className="fa-solid fa-square-caret-up upcoming-icon"></i>
        <p>UPCOMING</p>
      </div>
    </div>
  );
};

export default Collections;

import React from "react";
import Collections from "./Collections";
import CurrentList from "./pages/CurrentList";

const Homepage = (props) => {
  return (
    <div className="home-container">
      <Collections
        setActiveList={props.setActiveList}
        setActiveUrl={props.setActiveUrl}
      />
      <CurrentList
        currentArr={props.currentArr}
        setMovieId={props.setMovieId}
      />
    </div>
  );
};

export default Homepage;

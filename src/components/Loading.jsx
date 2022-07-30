import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading type="spin" color="#ffe227" />
    </div>
  );
};

export default Loading;

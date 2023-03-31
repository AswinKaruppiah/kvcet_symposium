import React from "react";
import "./Intro.css";
import intro from "./CodeFest design.4k (2).mp4";

function Intro() {
  return (
    <div className="intro">
      <video src={intro} autoplay="true" loop muted type="video/mp4" />
    </div>
  );
}

export default Intro;

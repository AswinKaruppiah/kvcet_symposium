import React from "react";
import "./Intro.css";
import intro from "./CodeFest design.4k (2).mp4";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

function Intro() {
  return (
    <div className="intro">
      {/* <Video autoPlay loop muted controls={false}>
        <source src={intro} type="video/webm" />
        />
      </Video> */}
      <video src={intro} autoplay="true" loop muted type="video/mp4" />
    </div>
  );
}

export default Intro;

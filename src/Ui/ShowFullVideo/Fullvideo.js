import React from "react";
import "./Fullvideo.css";
import full from "./SymposiumFull.mp4";
import "react-html5video/dist/styles.css";

function Fullvideo() {
  return (
    <div className="Fullvideo">
      <video src={full} type="video/mp4" controls />
    </div>
  );
}

export default Fullvideo;

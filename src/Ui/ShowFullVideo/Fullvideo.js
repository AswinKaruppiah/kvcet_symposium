import React from "react";
import "./Fullvideo.css";
import full from "./SymposiumFull.mp4";

function Fullvideo() {
  return (
    <div className="Fullvideo">
      <video src={full} type="video/mp4" controls />
    </div>
  );
}

export default Fullvideo;

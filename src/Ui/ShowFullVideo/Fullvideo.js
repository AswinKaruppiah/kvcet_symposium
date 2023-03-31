import React from "react";
import "./Fullvideo.css";
import "react-html5video/dist/styles.css";

function Fullvideo() {
  return (
    <div className="Fullvideo">
      <video
        src="https://drive.google.com/file/d/1H7w_0MI0erU4VVMsx3HUz-kTbdfHUGJy/view?usp=sharing"
        type="video/mp4"
        controls
      />
    </div>
  );
}

export default Fullvideo;

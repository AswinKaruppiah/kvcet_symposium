import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import About from "./Ui/About/About";
import Events from "./Ui/Events/Events";
import Intro from "./Ui/Intro/Intro";
import Timer from "./Ui/Timer/Timer";
import { Route, Routes, HashRouter } from "react-router-dom";
import Tech from "./Ui/Events/Tech/Tech";
import Nontech from "./Ui/Events/Non-tech/Non-tech";
import Workshop from "./Ui/Events/Workshop/Workshop";
import Clientside from "./Ui/Slider/Clientside";
import Fullvideo from "./Ui/ShowFullVideo/Fullvideo";
import Footer from "./Ui/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/kvcet_symposium">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Intro />
            <Timer />
            <About />
            <Events />
            <Clientside />
            <Fullvideo />
            <Footer />
          </>
        }
      />
      <Route path="/tech" element={<Tech />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/nontech" element={<Nontech />} />
    </Routes>
  </BrowserRouter>
);

//"homepage":"https://AswinKaruppiah.github.io/test-sym",

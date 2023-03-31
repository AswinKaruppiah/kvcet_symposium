import React from "react";
import tech from "./20230327_134355.jpg";
import nontech from "./20230327_135433.jpg";
import workshopimg from "./20230327_141610.jpg";
import "./Events.css";
import "./Eventimg.css";
import { NavLink } from "react-router-dom";

function Events() {
  return (
    <div className="events">
      <center>
        <h1 className="e-h1">Events</h1>
        <div className="e-detail">
          <NavLink className="nav-item" to="/tech">
            <div className="EventsImg-detail">
              <img src={tech} className="EventsImg" alt="not" />
            </div>
          </NavLink>
          <NavLink className="nav-item" to="/workshop">
            <div className="EventsImg-detail">
              <img src={workshopimg} className="EventsImg" alt="not" />
            </div>
          </NavLink>
          <NavLink className="nav-item" to="/nontech">
            <div className="EventsImg-detail">
              <img src={nontech} className="EventsImg" alt="not" />
            </div>
          </NavLink>
        </div>
      </center>
    </div>
  );
}

export default Events;

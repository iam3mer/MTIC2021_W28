import React from "react";
import {NavLink} from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/bird">Birds</NavLink></li>
        <li><NavLink to="/beach">Beaches</NavLink></li>
        <li><NavLink to="/mountain">Mountain</NavLink></li>
      </ul>
    </nav>
  )
}

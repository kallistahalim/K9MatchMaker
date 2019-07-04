import React from "react";
import "./style.css";
import "../Grid/index"

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 700, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >

      
      {children}
    </div>
  );
}

export default Jumbotron;

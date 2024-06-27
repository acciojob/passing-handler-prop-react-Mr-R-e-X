import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState("");
  const handleClick = () => {
    applyColor(setBackground);
  };
  return (
    <div
      className="fix-box"
      onClick={handleClick}
      style={{ background: background }}
    >
      <p className="subheading">Selection</p>
    </div>
  );
};

export default Selection;

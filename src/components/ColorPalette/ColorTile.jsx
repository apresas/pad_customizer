import React, { useState, useEffect } from "react";
import "./colorPalette.css";
import { FaCheckCircle } from "react-icons/fa";

function ColorTile({
  zone,
  color,
  title,
  updateColor,
}) {
  // const [selected, setSelected] = useState(false)

  // useEffect(() => {
  //     if(currentColor === color && !selected) {
  //         setSelected(false)
  //     } else if (currentColor !== color && selected){
  //         setSelected(false)
  //     } else if (currentColor === color && !selected) {
  //         setSelected(true)
  //     } else if (currentColor !== color && selected) {
  //         setSele
  //     }

  // }, [currentColor])

  return (
    <div className="tile_container">
      {/* {selected ? (
        <div className="highlight">
          <FaCheckCircle />
        </div>
      ) : null} */}
      <button
        className="tile"
        style={{ backgroundColor: color }}
        onClick={() => {
          // setSelected(true);
          if (zone === "ZONEONE") {
            updateColor(1, color, title);
          } else if (zone === "ZONETWO") {
            updateColor(2, color, title);
          } else if (zone === "ZONETHREE") {
            updateColor(3, color, title);
          } else if (zone === "ZONEFOUR") {
            updateColor(4, color, title);
          } else if (zone === "ZONEFIVE") {
            updateColor(5, color, title);
          } else if (zone === "ZONESIX") {
            updateColor(6, color, title);
          } else if (zone === "ZONESEVEN") {
            updateColor(7, color, title);
          } else if (zone === "BINDING") {
            updateColor(8, color, title);
          } else if (zone === "INNER") {
            updateColor(9, color, title);
          } else if (zone === "TOE") {
            updateColor(10, color, title);
          } else if (zone === "LOGO") {
            updateColor(11, color, title);
          } else if (zone === "CALF") {
            updateColor(12, color, title);
          } else if (zone === "STRAP") {
            updateColor(13, color, title);
          } else if (zone === "TEST3") {
            updateColor(14, color, title);
          } else if (zone === "TEST4") {
            updateColor(15, color, title);
          } else if (zone === "TEST5") {
            updateColor(16, color, title);
          }
        }}
      />
    </div>
  );
}

export default ColorTile;

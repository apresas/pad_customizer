import React from "react";
import ColorTile from "./ColorTile.jsx";
import "./colorPalette.css";

function ColorPalette({
  zone,
  setZone,
  index,
  setCurrentIndex,
  updateColor,
}) {
  const colors = [
    { color: "white", title: "White" },
    { color: "black", title: "Black" },
    { color: "silver", title: "Silver" },
    { color: "blue", title: "Blue" },
    { color: "navy", title: "Navy" },
    { color: "skyblue", title: "Baby" },
    { color: "teal", title: "Teal" },
    { color: "green", title: "Green" },
    { color: "darkgreen", title: "Dark Green" },
    { color: "purple", title: "Purple" },
    { color: "maroon", title: "Maroon" },
    { color: "red", title: "Red" },
    { color: "orange", title: "Orange" },
    { color: "gold", title: "Sports Gold" },
    { color: "yellow", title: "Yellow" },
    { color: "burlywood", title: "Tan" },
    { color: "#4d310c", title: "Brown" },
    { color: "grey", title: "Grey" },
    { color: "#C0B460", title: "Gold" },
    { color: "#988966", title: "Copper" },
  ];
  return (
    <div className="palette_container">
      {colors.map((color, index) => (
        <ColorTile
          key={index}
          zone={zone}
          setZone={setZone}
          color={color.color}
          title={color.title}
          index={index}
          setCurrentIndex={setCurrentIndex}
          updateColor={updateColor}
        />
      ))}
    </div>
  );
}

export default ColorPalette;

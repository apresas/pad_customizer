import React from "react";
import ColorTile from "./ColorTile.jsx";
import "./colorPalette.css";

function ColorPalette({ zone, setZone, index, setCurrentIndex, updateColor }) {
  const colors = [
    { color: "white", title: "White" },
    { color: "#1E1E1E", title: "Black" },
    { color: "grey", title: "Grey" },
    { color: "#1D2556", title: "Navy" },
    { color: "#3345EF", title: "Blue" },
    { color: "#33B8F2", title: "Baby" },
    { color: "teal", title: "Teal" },
    { color: "#116036", title: "Dark Green" },
    { color: "#11B754", title: "Green" },
    { color: "#A4F20F", title: "Slime" },
    { color: "#6431AD", title: "Purple" },
    { color: "#60142A", title: "Maroon" },
    { color: "maroon", title: "Brick" },
    { color: "#E51313", title: "Red" },
    { color: "#F45C0F", title: "Orange" },
    { color: "#ffa500", title: "Sports Gold" },
    { color: "#FFE600", title: "Yellow" },
    { color: "burlywood", title: "Tan" },
    { color: "#4d310c", title: "Brown" },
    { color: "silver", title: "Silver" },
    { color: "#C0B460", title: "Gold" },
    { color: "#988966", title: "Copper" },
  ];
  return (
    <div className="palette_container">
      {index === 12
        ? colors
            .slice(0, 2)
            .map((color, index) => (
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
            ))
        : colors.map((color, index) => (
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

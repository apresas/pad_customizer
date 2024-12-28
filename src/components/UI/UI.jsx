import React from "react";
import ColorPalette from "../ColorPalette/ColorPalette.jsx";
import "./ui.css";

function UI({
  currentIndex,
  setCurrentIndex,
  updateColor,
}) {
  const zones = [
    { zone: "ZONEONE", title: "Zone 1" },
    { zone: "ZONETWO", title: "Zone 2" },
    { zone: "ZONETHREE", title: "Zone 3" },
    { zone: "ZONEFOUR", title: "Zone 4" },
    { zone: "ZONEFIVE", title: "Zone 5" },
    { zone: "ZONESIX", title: "Zone 6" },
    { zone: "ZONESEVEN", title: "Zone 7" },
    { zone: "INNER", title: "Zone 8" },
    { zone: "BINDING", title: "Binding" },
    { zone: "TOE", title: "Stitching" },
    { zone: "LOGO", title: "Logo" },
    { zone: "TEST1", title: "Test 1" },
    { zone: "TEST2", title: "Test 2" },
    { zone: "TEST3", title: "Test 3" },
    { zone: "TEST4", title: "test 4" },
    { zone: "TEST5", title: "test 5" },
  ];

  return (
    <>
      <div className="UI_container">
        {zones.map((zone, index) => (
          <div
            className="ui_zone"
            key={index}
            style={{ translate: `${-100 * currentIndex}%` }}
          >
            <ColorPalette
              zone={zone.zone}
              index={index}
              title={zone.title}
              setCurrentIndex={setCurrentIndex}
              updateColor={updateColor}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default UI;

import React, { useEffect } from "react";
import "./zoneTitle.css";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

function zoneTitle({ setCurrentIndex, currentZone, currentIndex, testColor }) {
  const showPrevZone = () => {
    setCurrentIndex((index) => {
      if (index === 0) return 10;
      return index - 1;
    });
  };

  const showNextZone = () => {
    setCurrentIndex((index) => {
      if (index === 10) return 0;
      return index + 1;
    });
  };
  return (
    <div className="zoneTitle">
      <div className="zoneTitle_container">
        {currentIndex > 0 ? (
          <button className="prev_btn" onClick={showPrevZone}>
            <GrFormPrevious />
            {/* Prev */}
          </button>
        ) : (
          <button
            className="prev_btn"
            onClick={showPrevZone}
            style={{ opacity: 0, pointerEvents: "none" }}
          >
            <GrFormPrevious />
            {/* Prev */}
          </button>
        )}

        <div className="title_container">
          <h2>{currentZone}</h2>
          <h2 className="title_color">{testColor[currentIndex].tag}</h2>
        </div>
        {currentIndex < 10 ? (
          <button className="next_btn" onClick={showNextZone}>
            {/* Next */}
            <GrFormNext />
          </button>
        ) : (
          <button
            className="next_btn"
            onClick={showNextZone}
            style={{ opacity: 0, pointerEvents: "none" }}
          >
            {/* Next */}
            <GrFormNext />
          </button>
        )}
      </div>
    </div>
  );
}

export default zoneTitle;

import React from "react";
import "./sectionBar.css";

function SectionBar({ currentIndex, setCurrentIndex }) {
  return (
    <div className="sectionBar_container">
      <button className="section_marker z1" onClick={() => setCurrentIndex(0)}>
        {0 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z2" onClick={() => setCurrentIndex(1)}>
        {1 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z3" onClick={() => setCurrentIndex(2)}>
        {2 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z4" onClick={() => setCurrentIndex(3)}>
        {3 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z5" onClick={() => setCurrentIndex(4)}>
        {4 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z6" onClick={() => setCurrentIndex(5)}>
        {5 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z7" onClick={() => setCurrentIndex(6)}>
        {6 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z8" onClick={() => setCurrentIndex(7)}>
        {7 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z9" onClick={() => setCurrentIndex(8)}>
        {8 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z10" onClick={() => setCurrentIndex(9)}>
        {9 === currentIndex ? <span className="dot" /> : null}
      </button>
      <button className="section_marker z11" onClick={() => setCurrentIndex(10)}>
        {10 === currentIndex ? <span className="dot" /> : null}
      </button>
    </div>
  );
}

export default SectionBar;

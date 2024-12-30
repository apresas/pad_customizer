import React, { useState } from "react";
import "./itemSelector.css";
import FullIcon from "../../assets/full_icon.svg";
import PadsIcon from "../../assets/pads_icon.svg";
import BlockerIcon from "../../assets/blocker_icon.svg";
import CatcherIcon from "../../assets/catcher_icon.svg";

function ItemSelector() {
  const [currentSelection, setCurrentSelection] = useState({
    id: 1,
    item: "PADS",
  });

  const updateSelection = (id, item) => {
    setCurrentSelection({ id: id, item: item });
  };

  return (
    <div className="itemSelector_container">
      <div className="icons_container">
        <button className="item_btn" onClick={() => updateSelection(0, "FULL")}>
          <div className="icon">
            <img src={FullIcon} alt="" />
          </div>
        </button>
        <button className="item_btn" onClick={() => updateSelection(1, "PADS")}>
          <div className="icon">
            <img src={PadsIcon} alt="" />
          </div>
        </button>
        <button
          className="item_btn"
          onClick={() => updateSelection(2, "BLOCKER")}
        >
          <div className="icon">
            <img src={BlockerIcon} alt="" />
          </div>
        </button>
        <button
          className="item_btn"
          onClick={() => updateSelection(3, "CATCHER")}
        >
          <div className="icon">
            <img src={CatcherIcon} alt="" />
          </div>
        </button>
        <span
          className="marker"
          style={{ translate: `${5.5 * (currentSelection.id + 0)}rem` }}
        />
      </div>
      <span className="bar"></span>
    </div>
  );
}

export default ItemSelector;

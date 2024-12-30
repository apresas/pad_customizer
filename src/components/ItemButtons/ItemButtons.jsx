import React, { useState } from "react";
import "./ItemButtons.css";
import FullIcon from "../../assets/full_icon.svg";
import PadsIcon from "../../assets/pads_icon.svg";
import BlockerIcon from "../../assets/blocker_icon.svg";
import CatcherIcon from "../../assets/catcher_icon.svg";

function ItemButtons() {
  const [currentStroke, setCurrentStroke] = useState([
    { id: 0, borderColor: "#EFEFEF", value: "" },
    { id: 1, borderColor: "#EFEFEF", value: "" },
    { id: 2, borderColor: "#EFEFEF", value: "" },
    { id: 3, borderColor: "#EFEFEF", value: "" },
  ]);

  const [isActive, setIsActive] = useState([
    { id: 0, value: false, item: "FULL" },
    { id: 1, value: false, item: "PADS" },
    { id: 2, value: false, item: "BLOCKER" },
    { id: 3, value: false, item: "CATCHER" },
  ]);

  const updateActive = (id, newValue) => {
    setIsActive((prevArray) =>
      prevArray.map((obj) => {
        if (obj.id === id) {
          return { ...obj, value: newValue };
        } else return obj;
      })
    );
  };
  return (
    <div className="itemButtons_container">
      <h2>Choose Items To Order</h2>
      <div className="buttons_container">
        {isActive[0].value ? (
          <button
            className="product_btn"
            style={{
              borderColor: "#2DFFFC",
              boxShadow: "0 0 10px -1px #2DFFFC",
            }}
            onClick={() => updateActive(0, false)}
          >
            <img src={FullIcon} alt="" />
            Set
          </button>
        ) : (
          <button
            className="product_btn"
            style={{ borderColor: "lightgrey" }}
            onClick={() => {
              if (!isActive[1].value || !isActive[2].value || !isActive[3].value) {
                updateActive(0, true);
              } else {
                return null
              }
            }}
          >
            <img src={FullIcon} alt="" />
            Set
          </button>
        )}

        {isActive[1].value ? (
          <button
            className="product_btn"
            style={{
              borderColor: "#2DFFFC",
              boxShadow: "0 0 10px -1px #2DFFFC",
            }}
            onClick={() => updateActive(1, false)}
          >
            <img src={PadsIcon} alt="" />
            Pads
          </button>
        ) : (
          <button
            className="product_btn"
            style={{ borderColor: "lightgrey" }}
            onClick={() => {
              if (!isActive[0].value) {
                updateActive(1, true);
              } else {
                return null
              }
            }}
          >
            <img src={PadsIcon} alt="" />
            Pads
          </button>
        )}

        {isActive[2].value ? (
          <button
            className="product_btn"
            style={{
              borderColor: "#2DFFFC",
              boxShadow: "0 0 10px -1px #2DFFFC",
            }}
            onClick={() => updateActive(2, false)}
          >
            <img src={BlockerIcon} alt="" />
            Blocker
          </button>
        ) : (
          <button
            className="product_btn"
            style={{ borderColor: "lightgrey" }}
            onClick={() => {
              if (!isActive[0].value) {
                updateActive(2, true);
              } else {
                return null
              }
            }}
          >
            <img src={BlockerIcon} alt="" />
            Blocker
          </button>
        )}

        {isActive[3].value ? (
          <button
            className="product_btn"
            style={{
              borderColor: "#2DFFFC",
              boxShadow: "0 0 10px -1px #2DFFFC",
            }}
            onClick={() => updateActive(3, false)}
          >
            <img src={CatcherIcon} alt="" />
            Catcher
          </button>
        ) : (
          <button
            className="product_btn"
            style={{ borderColor: "lightgrey" }}
            onClick={() => {
              if (!isActive[0].value) {
                updateActive(3, true);
              } else {
                return null
              }
            }}
          >
            <img src={CatcherIcon} alt="" />
            Catcher
          </button>
        )}
      </div>
      <span className="bar" />
    </div>
  );
}

export default ItemButtons;

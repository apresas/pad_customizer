import React, { useState, useEffect } from "react";
import "./dropDown.css";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

function DropDown({ placeholder, options, dropdownIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([
    { id: 0, title: "Chassis", value: "Select Option" },
    { id: 1, title: "Knee Stack", value: "Select Option" },
    { id: 2, title: "Knee Pads", value: "Select Option" },
    { id: 3, title: "Boot Flex", value: "Select Option" },
    { id: 4, title: "Toe Taper", value: "Select Option" },
    { id: 5, title: "Toe Bridge", value: "Select Option" },
    { id: 6, title: "Boot Strap", value: "Select Option" },
    { id: 7, title: "Upper Calf Strap", value: "Select Option" },
    { id: 8, title: "Knee Flap", value: "Select Option" },
    { id: 9, title: "Size", value: "Select Option" },
    { id: 10, title: "Processing Time", value: "Select Option" },
  ]);

  const updateSelection = (id, newValue) => {
    setSelectedOption((prevArray) =>
      prevArray.map((obj) => {
        if (obj.id === id) {
          return { ...obj, value: newValue };
        } else return obj;
      })
    );
  };

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  //   useEffect(() => {
  //     console.log(selectedOption[0].value);
  //   }, [selectedOption]);

  return (
    <div className="dropdown_container">
      <div className="dropdown_title">
        {selectedOption[dropdownIndex].title}
      </div>
      <button className="content_container" onClick={() => setIsOpen(!isOpen)}>
        <div className="value_container">
          {selectedOption[dropdownIndex].value}
        </div>
        <div className="dropdown_btn">
          {isOpen ? (
            <div className="icon_container">
              <FaAngleUp />
            </div>
          ) : (
            <div
              className="icon_container"
              style={{ transform: "rotate(180deg)" }}
            >
              <FaAngleUp />
            </div>
          )}
        </div>
      </button>
      {isOpen ? (
        <div className="options_container">
          {options.map((option) => (
            <button
              className="options"
              onClick={() => {
                updateSelection(dropdownIndex, option);
                setIsOpen(!isOpen);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default DropDown;

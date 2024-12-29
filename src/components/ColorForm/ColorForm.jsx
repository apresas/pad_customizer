import React from "react";
import "./colorForm.css";
import DropDown from "./DropDown/DropDown";

function ColorForm({ testColor }) {
  const inputs = [
    { title: testColor[0].title, value: testColor[0].tag },
    { title: testColor[1].title, value: testColor[1].tag },
    { title: testColor[2].title, value: testColor[2].tag },
    { title: testColor[3].title, value: testColor[3].tag },
    { title: testColor[4].title, value: testColor[4].tag },
    { title: testColor[5].title, value: testColor[5].tag },
    { title: testColor[6].title, value: testColor[6].tag },
    { title: testColor[8].title, value: testColor[8].tag },
    { title: testColor[7].title, value: testColor[7].tag },
    { title: testColor[9].title, value: testColor[9].tag },
    { title: testColor[10].title, value: testColor[10].tag },
    { title: testColor[11].title, value: testColor[11].tag },
    { title: testColor[12].title, value: testColor[12].tag },
  ];

  const specs = [
    {
      title: "Chassis",
      value: testColor[0].tag,
      options: ["Chassis", "MAX", "FLY", "FLX"],
    },
    {
      title: "Knee Stack",
      value: testColor[1].tag,
      options: ["Knee Stack", "Regular", "Stiff"],
    },
    {
      title: "Knee Pads",
      value: testColor[1].tag,
      options: ["Knee Pads", "No", "Yes"],
    },
    {
      title: "Boot Flex",
      value: testColor[2].tag,
      options: ["Boot Flex", "Soft", "Stiff"],
    },
    {
      title: "Toe Taper",
      value: testColor[3].tag,
      options: [
        "Toe Taper",
        "80 Degrees",
        "84 Degrees",
        "87 Degrees",
        "90 Degrees",
      ],
    },
    {
      title: "Toe Bridge",
      value: testColor[4].tag,
      options: [
        "Toe Bridge",
        "Smart Cord",
        "Smart Toe",
        "Skate Lace",
        "Sliding Toe Bridge",
      ],
    },
    {
      title: "Boot Strap",
      value: testColor[5].tag,
      options: ["Boot Strap", "Leather", "Smart Boot", "Remove"],
    },
    {
      title: "Upper Calf Strap",
      value: testColor[6].tag,
      options: ["Upper Calf Strap", "No", "Yes"],
    },
    {
      title: "Knee Flap",
      value: testColor[8].tag,
      options: ["Knee Flap", "No", "Yes"],
    },
    {
      title: "Size",
      value: testColor[7].tag,
      options: ["Size", "37", "36", "35", "34", "33", "32"],
    },
    {
      title: "Processing Time",
      value: testColor[9].tag,
      options: ["Processing Time", "4-6 Weeks", "6-8 Weeks"],
    },
  ];

  return (
    <div className="colorForm_container">
      <h2>Customize Your Options</h2>
      <div className="form_container">
        {inputs.map((input, index) => (
          <div className="input_container" key={index}>
            <div className="input_title">{input.title}</div>
            <div className="color_input">{input.value}</div>
          </div>
        ))}
      </div>
      <h2>Customize Your Specs</h2>
      <div className="form_container" style={{ paddingBottom: "3rem" }}>
        {specs.map((spec, index) => (
          <DropDown
            key={index}
            dropdownIndex={index}
            options={spec.options}
            placeholder={spec.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorForm;

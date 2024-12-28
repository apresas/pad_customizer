import { React, useState, useEffect } from "react";
import Stage from "../Stage/Stage.jsx";
import UI from "../UI/UI.jsx";
import "./customizer.css";
import SectionBar from "../SectonBar/SectionBar.jsx";
import ZoneTitle from "../ZoneTitle/zoneTitle.jsx";
import ProductDesc from "../ProductDesc/productDesc.jsx";
import ColorForm from "../ColorForm/ColorForm.jsx";
import ProductInfo from "../ProductInfo/ProductInfo.jsx";

function Customizer() {
  //   *** Console Color Zones ***
  //   useEffect(() => {
  //     console.log(`Zone 1: ${zoneOneColor.fill}`);
  //     console.log(`Zone 2: ${zoneTwoColor.fill}`);
  //     console.log(`Zone 3: ${zoneThreeColor.fill}`);
  //     console.log(`Zone 4: ${zoneFourColor.fill}`);
  //     console.log(`Zone 5: ${zoneFiveColor.fill}`);
  //     console.log(`Zone 6: ${zoneSixColor.fill}`);
  //     console.log(`Zone 7: ${zoneSevenColor.fill}`);
  //     console.log(`Binding: ${bindingColor.fill}`);
  //     console.log(`Inner: ${innerColor.fill}`);
  //     console.log(`Toetie: ${toeTieColor.fill}`);
  //     console.log(`Logo: ${logoColor.fill}`);
  //   }, [
  //     zoneOneColor,
  //     zoneTwoColor,
  //     zoneThreeColor,
  //     zoneFourColor,
  //     zoneFiveColor,
  //     zoneSixColor,
  //     zoneSevenColor,
  //     bindingColor,
  //     innerColor,
  //     toeTieColor,
  //     logoColor,
  //   ]);

  //   useEffect(() => {
  //     console.log(testColor)
  //   }, [testColor])

  //   useEffect(() => {
  //     console.log(currentColor);
  //   }, [currentColor]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentZone, setCurrentZone] = useState("Zone 1");
  const [testColor, setTestColor] = useState([
    {
      title: "Zone 1",
      id: 1,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 2",
      id: 2,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 3",
      id: 3,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 4",
      id: 4,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 5",
      id: 5,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 6",
      id: 6,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 7",
      id: 7,
      color: "white",
      tag: "White",
    },
    {
      title: "Binding",
      id: 9,
      color: "white",
      tag: "White",
    },
    {
      title: "Zone 8",
      id: 8,
      color: "white",
      tag: "White",
    },
    {
      title: "Stitching",
      id: 10,
      color: "white",
      tag: "White",
    },
    {
      title: "Logo",
      id: 11,
      color: "silver",
      tag: "Silver",
    },
  ]);

  useEffect(() => {
    if (currentIndex === 0) {
      setCurrentZone("Zone 1:");
    } else if (currentIndex === 1) {
      setCurrentZone("Zone 2:");
    } else if (currentIndex === 2) {
      setCurrentZone("Zone 3:");
    } else if (currentIndex === 3) {
      setCurrentZone("Zone 4:");
    } else if (currentIndex === 4) {
      setCurrentZone("Zone 5:");
    } else if (currentIndex === 5) {
      setCurrentZone("Zone 6:");
    } else if (currentIndex === 6) {
      setCurrentZone("Zone 7:");
    } else if (currentIndex === 7) {
      setCurrentZone("Zone 8:");
    } else if (currentIndex === 8) {
      setCurrentZone("Binding:");
    } else if (currentIndex === 9) {
      setCurrentZone("Stitching:");
    } else if (currentIndex === 10) {
      setCurrentZone("Logo:");
    }
  }, [currentIndex]);

  const updateColor = (id, newColor, newTag) => {
    setTestColor((prevArray) =>
      prevArray.map((obj) => {
        if (obj.id === id) {
          return { ...obj, color: newColor, tag: newTag };
        } else return obj;
      })
    );
  };

  return (
    <div className="customizer_container">
      <SectionBar
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <ZoneTitle
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        currentZone={currentZone}
        testColor={testColor}
      />
      <UI
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        setCurrentZone={setCurrentZone}
        currentZone={currentZone}
        updateColor={updateColor}
        testColor={testColor}
      />
      {/* <div className="customizer_header">
        <h1>Customizer</h1>
        <div className="logo_container">
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 940.91 641"
          >
            <g id="Layer_1-2" data-name="Layer_1">
              <g>
                <g>
                  <path d="M786.54,346.91l-33.26,33.53c.28,2.48.48,4.96.48,7.51,0,23.82-12.74,44.75-31.81,56.39l-12.53-19.62h-43.1l-12.53,19.62c-19.07-11.64-31.81-32.57-31.81-56.39,0-2.55.21-5.09.48-7.51l-33.26-33.53c-5.23,12.6-8.19,26.51-8.19,41.03,0,38.35,20.31,72.09,50.81,90.88,9.09,5.72,19.07,9.98,29.74,12.67l5.37,1.17,20.93-32.84,21,32.84,5.44-1.17.21-.07c10.53-2.68,20.45-6.95,29.4-12.6,30.5-18.8,50.81-52.53,50.81-90.88,0-14.53-2.96-28.37-8.19-41.03Z" />
                  <path d="M687.87,281.06c-36.3,0-68.38,18.23-87.7,45.98l29.61,29.88c7.92-14.78,21.36-26.1,37.49-31.44v77.34h41.23v-77.33c16.13,5.35,29.56,16.67,37.47,31.45l29.62-29.89c-19.32-27.76-51.41-46.01-87.72-46.01Z" />
                </g>
                <g>
                  <g>
                    <path d="M924.24,297.49s-33.42,18.29-57.2,59.77c0,0,2.64,20.23,2.64,30.7,0,100.23-81.57,181.8-181.8,181.8-7.69,0-15.32-.5-22.72-1.42-59.13-7.41-109.42-43.31-136.78-93.39-6.7,21.23-15.89,41.6-27.36,60.77-2.64,4.42-5.34,8.76-8.34,13.11,29.85,36.33,69.67,64.11,115.26,79.29,25.08,8.33,52,12.89,79.93,12.89,139.77,0,253.04-113.34,253.04-253.04,0-31.91-5.91-62.4-16.67-90.47Z" />
                    <path d="M506.07,387.96c0-40.46,13.25-77.79,35.62-108,33.2-44.74,86.34-73.8,146.18-73.8,6.7,0,19.8,1.07,19.8,1.07,39.43-25.36,57.63-60.2,57.63-60.2-24.36-7.84-50.44-12.11-77.44-12.11-54.5,0-104.93,17.24-146.18,46.52-12.82,9.05-24.72,19.31-35.62,30.56-44.1,45.52-71.24,107.57-71.24,175.96h0c0,31.49-8.05,61.19-22.15,87.05-30.99,56.42-90.9,94.75-159.64,94.75-100.23,0-181.8-81.57-181.8-181.8V92.61C71.24,63.4,0,0,0,0v387.96c0,139.7,113.34,253.04,253.04,253.04,78.65,0,148.89-35.83,195.26-92.11,8.19-9.9,15.6-20.37,22.15-31.49,22.65-37.83,35.62-82.14,35.62-129.44h0Z" />
                  </g>
                  <path d="M434.84,0v249.19c18.02-32.84,42.32-61.83,71.24-85.27v-71.31C506.07,63.4,434.84,0,434.84,0Z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div> */}
      <Stage testColor={testColor} />
      <ProductDesc />
      <ColorForm testColor={testColor} />
      <ProductInfo />
    </div>
  );
}

export default Customizer;

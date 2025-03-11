import hearts from "./assets/hearts.png";
import flowers from "./assets/flowers.png";
import bunny from "./assets/bunny.png";
import heartSelect from "./assets/heartSelect.png";
import bunnySelect from "./assets/bunnySelect.png";
import flowerSelect from "./assets/flowerSelect.png";
import cherrySelect from "./assets/cherrySelect.png";
import cherry from "./assets/cherry.png";
import cat from "./assets/cat.png";
import catSelect from "./assets/catSelect.png";
import film from "./assets/film.png";
import filmSelect from "./assets/filmSelect.png";
import { useState } from "react";
import hearts3 from "./assets/hearts3.png";
import flowers3 from "./assets/flowers3.png";
import bunny3 from "./assets/bunny3.png";
import cherry3 from "./assets/cherry3.png";
import default2 from "./assets/default2.png";
import cat3 from "./assets/cat3.png";
import checkSticker from "./assets/checkSticker.png";
import html2canvas from "html2canvas";
import YouSure from "./youSure";

// import { useState, useEffect } from "react";
function StyleAndSave({
  selectedFrame,
  selectedColor,
  setSelectedColor,
  setSelectedFrame,
  capturedImages,
  formattedDate,
  setFormattedDate,
  setCapturedImages,
  setGetStarted,
  dates,
}) {
  const [selectedDecor, setSelectedDecor] = useState(null);
  const [text, setText] = useState("i feel pretty today");
  const [startOver, setStartOver] = useState(false);
  const [startOverClicked, setStartOverClicked] = useState(false);
  const colors = [
    { color6: "#ffffff" },
    { color1: "#e8c1bd" },
    { color2: "#a8798a" },
    { color4: "#5d7ca9" },
    { color3: "#7e9373" },
    { color5: "#edc8a5" },
  ];
  const decors = [
    { hearts: [heartSelect, hearts, "color4"] },
    { bunny: [bunnySelect, bunny, "color3"] },
    { flowers: [flowerSelect, flowers, "color1"] },
    { cherry: [cherrySelect, cherry, "color2"] },
    { cats: [catSelect, cat, "color5"] },
    { film: [filmSelect, film, "color6"] },
  ];
  const decors3 = [
    { hearts: [heartSelect, hearts3, "color4"] },
    { bunny: [bunnySelect, bunny3, "color3"] },
    { flowers: [flowerSelect, flowers3, "color1"] },
    { cherry: [cherrySelect, cherry3, "color2"] },
    { cats: [catSelect, cat3, "color6"] },
  ];

  const downloadPhotoStrip = async () => {
    const element =
      document.querySelector(".threeFrame") ||
      document.querySelector(".fourFrame");

    if (!element) return;

    const { width, height } = element.getBoundingClientRect();

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      x: 0,
      y: 0,
      width: width,
      height: height,
    });

    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "photo-strip.png";
    link.click();
  };

  return (
    <div>
      {selectedFrame === "threeFrame" && (
        <div className="chooseFrame">
          {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <button
                className="backButton"
                onClick={() => setSelectedFrame(null)}
              >
                back
              </button>
            </div> */}
          <div className="chooseColor">
            {colors.map((obj) => {
              const key = Object.keys(obj)[0];
              const value = obj[key];

              return (
                <div
                  key={key}
                  id={key}
                  // className="imperfect-circle"
                  className={`imperfect-circle ${key || ""}`.trim()}
                  style={{ backgroundColor: value }}
                  onClick={() => setSelectedColor(value)}
                ></div>
              );
            })}
          </div>
          <div
            className="threeFrame"
            style={{ backgroundColor: selectedColor }}
          >
            {selectedDecor && (
              <div className="decorWrapper">
                {selectedDecor && (
                  <img src={selectedDecor} className="decorOverlay" />
                )}
              </div>
            )}{" "}
            {!capturedImages?.length
              ? images.slice(0, 3).map((el, index) => (
                  <div className="grid-item" key={index}>
                    <img
                      src={el}
                      alt={`Image ${index}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))
              : capturedImages.slice(0, 3).map((el, index) => (
                  <div className="grid-item" key={index}>
                    <img
                      src={el}
                      alt={`Image ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* <img src={default2} alt="Test" /> */}
                  </div>
                ))}
            <div
              className="grid-item blank-item"
              style={{ backgroundColor: selectedColor }}
            >
              {" "}
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value.slice(0, 20))}
                className="editableInput"
              />
              <input
                type="text"
                value={formattedDate}
                onChange={(e) => setFormattedDate(e.target.value.slice(0, 20))}
                className="editableInput"
              />
            </div>
          </div>
          <div className="chooseDecor">
            {decors3.map((obj) => {
              const key = Object.keys(obj)[0];
              const value = obj[key];

              return (
                <div
                  key={key}
                  id={key}
                  className={`imperfect-circle ${value[2] || ""}`.trim()}
                  style={{ backgroundColor: selectedColor }}
                  onClick={() => setSelectedDecor(value[1])}
                >
                  <img src={value[0]} className="decorOverlay" />
                </div>
              );
            })}
            <button
              className="imperfect-circle"
              style={{ backgroundColor: selectedColor }}
              onClick={() => setSelectedDecor(null)}
            >
              {" "}
            </button>
          </div>
        </div>
      )}
      {selectedFrame === "fourFrame" && (
        <div className="chooseFrame">
          <div className="chooseColor">
            {colors.map((obj) => {
              const key = Object.keys(obj)[0];
              const value = obj[key];
              return (
                <div
                  key={key}
                  id={key}
                  className={`imperfect-circle ${key || ""}`.trim()}
                  style={{ backgroundColor: value }}
                  onClick={() => setSelectedColor(value)}
                ></div>
              );
            })}
          </div>
          <div
            className="fourFrame"
            style={{ backgroundColor: selectedColor }}
            // onClick={() => setSelectedFrame("fourFrame")}
          >
            {selectedDecor && (
              <div className="decorWrapper">
                {selectedDecor && (
                  <img src={selectedDecor} className="decorOverlay" />
                )}
              </div>
            )}{" "}
            {!capturedImages?.length
              ? images.map((el, index) => (
                  <div className="grid-item" key={index}>
                    <img
                      src={el}
                      alt={`Image ${index}`}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                ))
              : capturedImages.map((el, index) => (
                  <div className="grid-item" key={index}>
                    <img
                      src={el}
                      alt={`Image ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* <img src={default2} alt="Test" /> */}
                  </div>
                ))}
          </div>
          <div className="chooseDecor">
            {decors.map((obj) => {
              const key = Object.keys(obj)[0];
              const value = obj[key];

              return (
                <div
                  key={key}
                  id={key}
                  className={`imperfect-circle ${value[2] || ""}`.trim()}
                  style={{ backgroundColor: selectedColor }}
                  onClick={() => setSelectedDecor(value[1])}
                >
                  <img src={value[0]} className="decorOverlay" />
                </div>
              );
            })}
            <button
              className="imperfect-circle"
              style={{ backgroundColor: selectedColor }}
              onClick={() => setSelectedDecor(null)}
            >
              {" "}
            </button>
          </div>
        </div>
      )}
      <div className="bottomButtons">
        {" "}
        {startOver ? (
          <div className="startOverContainer">
            <button
              onClick={() => {
                setCapturedImages([]);
                setGetStarted(false);
                setSelectedFrame(null);
                setSelectedColor("#ffffff");
                setText("I feel pretty today");
                setFormattedDate(dates);
                // setStartOverClicked(true);
              }}
              className="startOver confirmation"
            >
              Yes
            </button>
            {startOver && (
              <div className="popup">
                <img
                  src={checkSticker}
                  alt="checkSticker"
                  className="checkImage"
                />
              </div>
            )}
          </div>
        ) : (
          <div className="startOverContainer">
            <button onClick={() => setStartOver(true)} className="startOver">
              Start Over
            </button>
          </div>
        )}
        {!startOver ? (
          <button
            onClick={downloadPhotoStrip}
            className="downloadButton backButton"
          >
            Download
          </button>
        ) : (
          <button
            onClick={() => setStartOver(false)}
            className="downloadButton backButton confirmation"
          >
            No
          </button>
        )}
      </div>
      {startOver && <YouSure setStartOver={setStartOver} />}
    </div>
  );
}

export default StyleAndSave;

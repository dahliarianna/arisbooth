import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import default1 from "./assets/default1.png";
import default2 from "./assets/default2.png";
import default3 from "./assets/default3.png";
import default4 from "./assets/default4.png";
import hearts from "./assets/hearts.png";
import flowers from "./assets/flowers.png";
import bunny from "./assets/bunny.png";
import heartSelect from "./assets/heartSelect.png";
import bunnySelect from "./assets/bunnySelect.png";
import flowerSelect from "./assets/flowerSelect.png";
import cherrySelect from "./assets/cherrySelect.png";
import cherry from "./assets/cherry.png";
import catSelect from "./assets/catSelect.png";
import film from "./assets/film.png";
import filmSelect from "./assets/filmSelect.png";
import Capture from "./Capture";

import StyleAndSave from "./StyleAndSave";
import { useEffect } from "react";

function Landing({ setCurrentView }) {
  const [selectedFrame, setSelectedFrame] = useState(null);
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [getStarted, setGetStarted] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);
  const [formattedDate, setFormattedDate] = useState("");
  const images = [default1, default2, default3, default4];
  console.log(`date`, formattedDate);
  const colors = [
    { color6: "#ffffff" },
    { color1: "#e8c1bd" },
    { color2: "#a8798a" },
    { color4: "#5d7ca9" },
    { color3: "#7e9373" },
    { color5: "#edc8a5" },
  ];
  const decors = [
    { hearts: heartSelect },
    { hearts: bunnySelect },
    { hearts: flowerSelect },
    { hearts: cherrySelect },
    { hearts: catSelect },
    { hearts: filmSelect },
  ];
  const today = new Date();

  const day = today.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[today.getMonth()];
  const year = today.getFullYear();

  const dates = `${month} ${day}, ${year}`;

  useEffect(() => setFormattedDate(dates), []);

  return (
    <div className="landingMain">
      <div className="clouds">
        <svg
          className="cloudIcon"
          style={{ left: 1, top: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="150"
          height="150"
        >
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="75%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8293a9" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradientId)"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <svg
          className="cloudIcon"
          style={{ left: -100, top: 6 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="100"
          height="200"
        >
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="75%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8293a9" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradientId)"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <svg
          className="cloudIcon"
          style={{ left: -50, top: 2 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="300"
          height="300"
        >
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="75%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8293a9" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradientId)"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <svg
          className="cloudIcon1"
          style={{ left: 0, top: 3 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="250"
          height="250"
        >
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="75%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8293a9" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradientId)"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <svg
          className="cloudIcon1"
          // style={{ left: 1, top: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="200"
          height="200"
        >
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="75%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8293a9" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradientId)"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <svg
          className="cloudIcon1"
          style={{ right: 2, top: 5 }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="240"
          height="240"
        >
          <defs>
            <linearGradient id="gradientId" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="10%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.8" />
              <stop offset="75%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8293a9" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradientId)"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <svg
          className="moon"
          style={{
            right: "150px",
            top: "30px",
            position: "absolute",
            transform: "rotateX(20deg)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="30"
          height="30"
        >
          <path
            fill="url(#gradientId)"
            d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
          />
        </svg>
        <svg
          height="20px"
          width="20px"
          className="sparkles"
          style={{
            right: 100,
            top: 10,
            position: "absolute",
          }}
          viewBox="0 0 512 512"
          fill="#000000"
          stroke="#000000"
          strokeWidth="0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              fill="url(#gradientId)"
              d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917 
          c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9 
          c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904 
          C315.08,148.422,272.014,131.551,247.355,106.9z"
            />
            <path
              fill="url(#gradientId)"
              d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872 
          c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864 
          c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82 
          C447.939,329.14,422.201,319.061,407.471,304.339z"
            />
            <path
              fill="url(#gradientId)"
              d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027 
          c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626 
          c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019 
          C159.024,395.966,150.555,374.351,146.352,354.702z"
            />
          </g>
        </svg>
      </div>

      {(selectedFrame === "threeFrame" && capturedImages?.length === 3) ||
      (selectedFrame === "fourFrame" && capturedImages?.length === 4) ? (
        <StyleAndSave
          capturedImages={capturedImages}
          setCapturedImages={setCapturedImages}
          selectedFrame={selectedFrame}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          formattedDate={formattedDate}
          setFormattedDate={setFormattedDate}
          setSelectedFrame={setSelectedFrame}
          setGetStarted={setGetStarted}
          dates={dates}
        />
      ) : getStarted && capturedImages?.length !== 4 ? (
        // ((capturedImages?.length !== 3 && selectedFrame !== "threeFrame") ||
        //   (capturedImages?.length !== 4 && selectedFrame !== "fourFrame"))
        <Capture
          capturedImages={capturedImages}
          setCapturedImages={setCapturedImages}
          selectedFrame={selectedFrame}
        />
      ) : (
        <>
          <h2 className="title" style={{ fontWeight: 900 }}>
            Select Frame To Begin
          </h2>
          <div className="">
            {
              <div className="chooseFrame">
                <div
                  className="threeFrame defaultFrame"
                  style={{
                    backgroundColor: selectedColor,
                    transform:
                      selectedFrame === "threeFrame" ? "scale(1.02)" : "none",
                    opacity:
                      selectedFrame && selectedFrame !== "threeFrame" ? 0.6 : 1,
                  }}
                  onClick={() => setSelectedFrame("threeFrame")}
                >
                  {images.slice(0, 3).map((el, index) => (
                    <div className="grid-item" key={index}>
                      <img
                        src={el}
                        alt={`Image ${index}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ))}
                  <div
                    className="grid-item blank-item"
                    style={{ backgroundColor: selectedColor }}
                  >
                    <div>i feel pretty today</div>
                    <div>{formattedDate}</div>
                  </div>
                </div>
                <div
                  className="fourFrame defaultFrame"
                  style={{
                    backgroundColor: selectedColor,
                    transform:
                      selectedFrame === "fourFrame" ? "scale(1.02)" : "none",
                    opacity:
                      selectedFrame && selectedFrame !== "fourFrame" ? 0.6 : 1,
                  }}
                  onClick={() => setSelectedFrame("fourFrame")}
                >
                  {images.map((el, index) => (
                    <div className="grid-item" key={index}>
                      <img
                        src={el}
                        alt={`Image ${index}`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
          {
            <div>
              <button
                disabled={!selectedFrame}
                className="beginButton"
                onClick={() => setGetStarted(true)}
                style={{ opacity: selectedFrame ? 1 : 0.4 }}
              >
                begin
              </button>
            </div>
          }
        </>
      )}
    </div>
  );
}

export default Landing;

import { useState } from "react";
import "./App.css";
import booth from "./assets/booth.png";
import selfie from "./assets/selfie.jpg";
import { useRef, useEffect } from "react";
import Landing from "./Landing";
import Capture from "./Capture";
import dahlia from "./assets/dahlia.png";

function App() {
  const [currentView, setCurrentView] = useState("");
  return (
    <div className="main">
      <div className="header">
        {" "}
        <img src={dahlia} alt="logo" />
      </div>
      {!currentView && <Landing setCurrentView={setCurrentView} />}
      {/* {currentView === "snap" && <Capture setCurrentView={setCurrentView} />} */}
      {/* <Capture /> */}
    </div>
    // <div style={{ display: "flex", flexDirection: "column" }}>
    //   <div className="testImageWrapper">
    //     <img className="testImage" src={selfie} alt="booth" />
    //   </div>
    //   <div className="photobooth">
    //     <img className="photo" src={selfie} alt="Photobooth Effect" />
    //   </div>
    //   <div className="photobooth1">
    //     <img className="photo1" src={selfie} alt="Photobooth Effect" />
    //   </div>
    //   <img className="testImage1" src={selfie}></img>
    //   <div className="dreamyWrapper">
    //     <img className="dreamyImage" src={selfie} alt="Dreamy Effect" />
    //   </div>
    // </div>
  );
}

export default App;

import { useState, useRef, useEffect } from "react";
import frame from "./assets/frame.png";
const Capture = ({ capturedImages, setCapturedImages, selectedFrame }) => {
  const videoRef = useRef(null);
  const [filter, setFilter] = useState();
  const [flip, setFlip] = useState(false);
  const [texture, setTexture] = useState(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [mode, setMode] = useState("manual");
  const [countdown, setCountdown] = useState(0);
  const [autoCaptureCount, setAutoCaptureCount] = useState(0);
  const [flash, setFlash] = useState(false);

  const maxPhotos =
    selectedFrame === "threeFrame" ? 3 : selectedFrame === "fourFrame" ? 4 : 3;
  const startCountdown = () => {
    let timeLeft = 5;
    setCountdown(timeLeft);

    const interval = setInterval(() => {
      timeLeft -= 1;
      setCountdown(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        captureImage();
      }
    }, 1000);
  };

  console.log(`captured`, capturedImages);
  // const captureImage = () => {
  //   const video = videoRef.current;
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // Set canvas size to match video
  //   canvas.width = video.videoWidth;
  //   canvas.height = video.videoHeight;

  //   // Apply filter before capturing
  //   ctx.filter = filter;
  //   ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  //   // Convert to image URL
  //   const imageUrl = canvas.toDataURL("image/png");

  //   // Add to the photo strip
  //   setCapturedImages((prev) => [...prev, imageUrl]);
  // };

  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((stream) => {
  //       if (videoRef.current) {
  //         videoRef.current.srcObject = stream;
  //       }
  //     })
  //     .catch((err) => console.error("Error accessing webcam:", err));
  // }, []);
  // useEffect(() => {
  //   // Access the webcam
  //   navigator.mediaDevices
  //     .getUserMedia({ video: true })
  //     .then((stream) => {
  //       if (videoRef.current) {
  //         videoRef.current.srcObject = stream;
  //       }
  //     })
  //     .catch((err) => console.error("Error accessing webcam:", err));
  //   return () => {
  //     if (streamRef.current) {
  //       streamRef.current.getTracks().forEach((track) => track.stop());
  //     }
  //   };
  // }, []);
  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);
  // };
  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Apply filter and flip (if enabled)
    ctx.filter = filter;

    if (flip) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    if (flip) {
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
    }

    const imageUrl = canvas.toDataURL("image/png");
    setCapturedImages((prevImages) => [...prevImages, imageUrl]);
    console.log("✅ Image Captured!");
  };
  const captureImageWithCountdown = () => {
    let timeLeft = 3;
    setCountdown(timeLeft);

    const interval = setInterval(() => {
      if (timeLeft > 1) {
        timeLeft -= 1;
        setCountdown(timeLeft);
      } else {
        captureImage();
        setFlash(true);
        setTimeout(() => setFlash(false), 200);

        clearInterval(interval);
        setCountdown(0);
      }
    }, 1000);
  };

  const startAutoCapture = () => {
    setAutoCaptureCount(0);
    let count = 0;
    let timeLeft = 3;
    setCountdown(timeLeft);

    const interval = setInterval(() => {
      if (timeLeft > 1) {
        timeLeft -= 1;
        setCountdown(timeLeft);
      } else {
        captureImage();
        setFlash(true);
        setTimeout(() => setFlash(false), 200);
        count++;
        setAutoCaptureCount(count);

        if (count >= maxPhotos) {
          clearInterval(interval);
          setCountdown(0);
        } else {
          timeLeft = 3;
          setCountdown(timeLeft);
        }
      }
    }, 1000);
  };

  return (
    <div className="captureFeed">
      <div className="modeSelector">
        <button
          onClick={() => setMode("manual")}
          style={{ opacity: mode === "manual" ? 1 : 0.6 }}
          disabled={capturedImages?.length}
        >
          Manual Mode
        </button>
        <button
          onClick={() => setMode("auto")}
          style={{ opacity: mode === "auto" ? 1 : 0.6 }}
          disabled={capturedImages?.length}
        >
          Auto Mode
        </button>
      </div>
      <div className="centerContainer">
        <div className="videoContainer">
          <div className={texture}></div>
          {countdown > 0 && <div className="countdownTimer">{countdown}</div>}
          {flash && <div className="flash"></div>}
          <video
            ref={videoRef}
            autoPlay
            className="videoFeed"
            style={{ filter, transform: flip ? "scaleX(-1)" : "none" }}
          ></video>
          <img src={frame} alt="Overlay" className="videoOverlay" />
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </div>
        <div className="captureButtonDiv">
          {" "}
          {mode === "manual" ? (
            <button
              onClick={captureImageWithCountdown}
              className="captureButton backButton"
            >
              <div></div>
            </button>
          ) : (
            <button
              onClick={startAutoCapture}
              className="captureButton backButton"
            >
              <div></div>
            </button>
          )}
        </div>
      </div>

      <div className="filterButtons">
        <button
          onClick={() => setFlip((prev) => !prev)}
          style={{ opacity: flip ? 1 : 0.6 }}
        >
          Flip
        </button>
        <button
          onClick={() => setTexture("wood")}
          style={{ opacity: texture === "wood" ? 1 : 0.6 }}
        >
          Wood
        </button>
        <button
          onClick={() => setTexture("grains")}
          style={{ opacity: texture === "grains" ? 1 : 0.6 }}
        >
          Grains
        </button>
        <button
          onClick={() =>
            setFilter(
              "sepia(30%) grayscale(100%) contrast(1.4) brightness(0.8)"
            )
          }
          style={{
            opacity:
              filter ===
              "sepia(30%) grayscale(100%) contrast(1.4) brightness(0.8)"
                ? 1
                : 0.6,
          }}
        >
          {" "}
          B&W{" "}
        </button>
        <button
          style={{
            opacity:
              filter ===
              "grayscale(100%) sepia(70%) contrast(1.3) brightness(0.8)"
                ? 1
                : 0.6,
          }}
          onClick={() =>
            setFilter(
              "grayscale(100%) sepia(70%) contrast(1.3) brightness(0.8)"
            )
          }
        >
          {" "}
          Vintage{" "}
        </button>
        <button
          style={{
            opacity:
              filter === "blur(1px) brightness(1.3) contrast(0.9) saturate(0.9)"
                ? 1
                : 0.6,
          }}
          onClick={() =>
            setFilter("blur(1px) brightness(1.3) contrast(0.9) saturate(0.9)")
          }
        >
          {" "}
          Blur{" "}
        </button>
        <button
          onClick={() => setFilter("none")}
          style={{
            opacity: !filter || filter === "none" ? 1 : 0.6,
          }}
        >
          {" "}
          No Filter{" "}
        </button>
        <button
          onClick={() => setTexture("")}
          style={{
            opacity: !texture ? 1 : 0.6,
          }}
        >
          No texture
        </button>
      </div>
    </div>
  );
};

export default Capture;

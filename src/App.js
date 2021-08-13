import React, { useRef } from "react";
import "./App.css";

const CONSTRAINTS = { video: true };

function App() {
  const videoRef = useRef(null);

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
    if (videoRef && videoRef.current && !videoRef.current.srcObject) {
      videoRef.current.srcObject = stream;
    }
  };

  return (
    <div className="App">
      <video autoPlay ref={videoRef} />
      <button onClick={startVideo}>start</button>
    </div>
  );
}

export default App;
import React, { useRef, useEffect } from "react";
import "./App.css";

const CONSTRAINTS = { video: true };

function App() {
  const videoRef = useRef(null);

  // const startVideo = async () => {
  //   const stream = await navigator.mediaDevices.getUserMedia(CONSTRAINTS);
  //   if (videoRef && videoRef.current && !videoRef.current.srcObject) {
  //     videoRef.current.srcObject = stream;
  //   }
  // };

  useEffect(() => {
    (async () => {
      videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia(CONSTRAINTS)
    })();
  }, [])

  return (
    <div className="App">
      <div id='video_wrapper'>
        <video autoPlay ref={videoRef} />
      </div>
      <div>
        자동으로 카메라가 켜짐
      </div>
    </div>
  );
}

export default App;
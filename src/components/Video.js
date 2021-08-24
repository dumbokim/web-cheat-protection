import React, { useEffect, useRef } from "react";

const CONSTRAINTS = { video: true };

export default function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    (async () => {
      videoRef.current.srcObject = await navigator.mediaDevices.getUserMedia(
        CONSTRAINTS
      );
    })();
  }, []);

  return (
    <div>
      <div id="video_wrapper">
        <video autoPlay ref={videoRef} />
      </div>
    </div>
  );
}

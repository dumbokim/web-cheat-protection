import React, { useRef, useEffect } from "react";
import "./App.css";
import Video from "./components/Video";
import Timer from "./components/Timer";
import PdfView from "./components/PdfView";
import Answers from "./components/Answers";

function App() {
  return (
    <div className="App">
      <Video />
      <div id="content_container">
        <div>
          <Timer />
          <PdfView />
        </div>
        <Answers />
      </div>
    </div>
  );
}

export default App;

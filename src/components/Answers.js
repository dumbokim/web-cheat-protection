import React from "react";
import "../App.css";

export default function Answers() {
  let m = [];
  for (let index = 0; index < 100; index++) {
    m.push(index);
  }

  return (
    <div id="answer_container">
      <h2>정답 입력</h2>
      {m.map((num) => {
        return (
          <div>
            <label>{num + 1}</label>
            <input />
          </div>
        );
      })}
      <button>제출</button>
    </div>
  );
}

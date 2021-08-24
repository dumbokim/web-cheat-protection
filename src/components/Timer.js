import React, { useState } from "react";

const Timer = () => {
  const [countDown, setCountDown] = useState("");

  let countDownDate;

  const setTime = () => {
    countDownDate = new Date(countDown).getTime();
    let x = setInterval(() => {
      // Get today's date and time
      let now = new Date().getTime();
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let hours = Math.floor(distance % 24);
      let minutes = Math.floor(distance % 60);
      let seconds = Math.floor(distance % 60);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerText =
        hours + "시간 " + minutes + "분 " + seconds + "초";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerText = "EXPIRED";
        // setTimeout(function () {
        //   window.location.href = "http://www.naver.com/";
        // }, 1000);
      }
    }, 1000);
  };

  return (
    <div id="timer_container">
      <p id="demo"></p>
      {/* <label>Aug 24, 2021 20:00:00</label> */}
      <input onChange={(e) => setCountDown(e.target.value)} />
      <button onClick={() => setTime()}>button</button>
    </div>
  );
};

export default Timer;

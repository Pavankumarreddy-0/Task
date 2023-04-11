import React, { useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const dropDownValues = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const [startTimer, setStartTimer] = React.useState(false);
  const [timerId, setTimerId] = React.useState(0);
  const [selected, setSelected] = React.useState();
  const [time, setTime] = React.useState(0);

  useEffect(() => {
    if (selected === "10") {
      setTime(10);
    } else if (selected === "20") {
      setTime(20);
    } else if (selected === "30") {
      setTime(30);
    } else if (selected === "40") {
      setTime(40);
    } else if (selected === "50") {
      setTime(50);
    } else if (selected === "60") {
      setTime(60);
    } else if (selected === "70") {
      setTime(70);
    } else if (selected === "80") {
      setTime(80);
    } else if (selected === "90") {
      setTime(90);
    }
  }, [selected]);

  useEffect(() => {
    let intervalId = null;
    if (startTimer) {
      if (time > 0) {
        intervalId = setInterval(() => {
          setTime((prevValue) => prevValue - 1);
        }, 1000);
      }
      setTimerId(intervalId);
    } else {
      clearInterval(timerId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTimer]);

  const Restart = () => {
    setStartTimer(true);
  };

  const stop = () => {
    setStartTimer(false);
  };

  return (
    // <div>
    //   <h1>How to Create Timer in Any React Project.</h1>
    // </div>
    <div className="timer">
      <div className="container">
        <div className="timer_container">
          <h2>
            {time > 0 ? `Time: ${time} seconds` : "Choose a value"}
            {/* {time < 10 ? "0" + time : time} */}
            {/* {selected} */}
          </h2>
          <div>
            <select
              className="select-container"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {dropDownValues.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>
          <button
            className={`restart ${startTimer && "disable"}`}
            onClick={Restart}
          >
            Start
          </button>
          <button className={`stop ${!startTimer && "disable"}`} onClick={stop}>
            Stop
          </button>{" "}
          <div>
            <h3>
              {time > 0 ? ` Remaining Time: ${time} seconds` : "Timer stopped"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

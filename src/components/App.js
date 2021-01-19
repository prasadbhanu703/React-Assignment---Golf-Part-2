import React, { useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });

  useEffect(() => {
    const keyListner = (event) => {
      // console.log("bcjjbciohiowhfio");
      if (renderBall) {
        if (event.keyCode === 37) {
          upadetXY(x - 5, y);
        }
        if (event.keyCode === 38) {
          upadetXY(x, y - 5);
        }
        if (event.keyCode === 39) {
          upadetXY(x + 5, y);
        }
        if (event.keyCode === 40) {
          upadetXY(x, y + 5);
        }
      }
    };

    document.addEventListener("keydown", keyListner);

    return () => document.removeEventListener("keydown", keyListner);
  }, [renderBall, x, y]);

  const upadetXY = (newX, newY) => {
    setX(newX);
    setY(newY);
    setBallPosition({
      left: newX + "px",
      top: newY + "px"
    });
  };

  const start = () => {
    setRenderBall(true);
  };
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({
      left: "0px",
      top: "0px"
    });
  };
  const renderChoice = () => {
    return renderBall ? (
      <div
        className="ball"
        style={{
          position: "absolute",
          left: ballPosition.left,
          top: ballPosition.top
        }}
      ></div>
    ) : (
      <button onClick={start} className="start">
        Start
      </button>
    );
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

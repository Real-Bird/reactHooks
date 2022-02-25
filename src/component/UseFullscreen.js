import React, { useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        // 파이어폭스
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        // 사파리
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        // IE11
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      // 파이어폭스
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      // 사파리
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      // IE11
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

const UseFullscreen = () => {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are Full" : "We are Small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div>
      <div ref={element}>
        <img
          alt="react"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png"
          width="200px"
        />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
    </div>
  );
};

export default UseFullscreen;

import React, { useEffect, useRef, useState } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const UseFadeIn = () => {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 5);
  const reload = () => location.reload();
  return (
    <div>
      <h1 {...fadeInH1}>Hello, World!!!</h1>
      <p {...fadeInP}>lorem ipsum</p>
      <button onClick={reload}>새로고침</button>
    </div>
  );
};

export default UseFadeIn;

import React, { useEffect, useRef, useState } from "react";

const useClick = (onClick) => {
  // useRef() => component의 어떤 부분을 선택하는 방법
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};

const UseClick = () => {
  const [count, setCount] = useState(0);
  const countUp = () => setCount(count + 1);
  const title = useClick(countUp);
  return (
    <div>
      <h1 ref={title}>hi</h1>
      <h3>{count}</h3>
    </div>
  );
};

export default UseClick;

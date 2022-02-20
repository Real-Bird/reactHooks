import React, { useEffect, useState } from "react";

const UseEffect = () => {
  useEffect(() => {
    setHead(`useEffect 진행 중 ${number}`);
    setDeps(console.log("I'm re-render"));
  });
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const [head, setHead] = useState("");
  const [deps, setDeps] = useState("");
  return (
    <div>
      <h2>
        {head} {aNumber}
      </h2>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default UseEffect;

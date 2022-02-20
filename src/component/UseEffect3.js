import React, { useEffect, useState } from "react";

const UseEffect3 = () => {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const [head, setHead] = useState("");
  const [deps, setDeps] = useState("");
  useEffect(() => {
    setDeps(console.log("I'm re-render"));
    setHead(`useEffect3 진행 중 ${number} ${aNumber}`);
  }, [number]);
  return (
    <div>
      <h2>{head}</h2>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};

export default UseEffect3;

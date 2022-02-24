import React, { useEffect, useState } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 20) {
      onBefore();
    }
  };
  useEffect(() => {
    const h1 = document.querySelector("h1");
    h1.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const UseBeforeLeave = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Don't Leave Me</h1>
    </div>
  );
};

export default UseBeforeLeave;

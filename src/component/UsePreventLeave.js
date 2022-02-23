import React, { useState } from "react";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const UsePreventLeave = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  const newWindow = () => location.reload();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
      <div style={{ margin: 10 }}>
        <button onClick={newWindow}>새로고침</button>
      </div>
    </div>
  );
};

export default UsePreventLeave;

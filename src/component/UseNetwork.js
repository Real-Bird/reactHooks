import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const UseNetwork = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We juse went online" : "We are want online");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default UseNetwork;

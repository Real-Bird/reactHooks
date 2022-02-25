import React, { useState } from "react";
import useAxios from "./useAxios";

const UseAxios = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://jsonplaceholder.typicode.com/todos/1"
  });
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default UseAxios;

import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  let willUpdate = true;
  if (typeof validator === "function") {
    willUpdate = validator(value);
  }
  if (willUpdate) {
    setValue(value);
  }
  return { value, onChange };
};

const App = () => {
  const [item, setItem] = useState(0);
  const incremetItem = () => setItem(item + 1);
  const decremetItem = () => setItem(item - 1);
  const maxLen = (value) => value.length <= 10;
  const name = useInput("mr. ", maxLen);

  return (
    <div>
      <h2>{item}</h2>
      <button onClick={incremetItem}>incremetItem</button>
      <button onClick={decremetItem}>decremetItem</button>
      <div>
        <input placeholder="Name" {...name} />
      </div>
    </div>
  );
};

export default App;

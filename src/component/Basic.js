import React, { useState } from "react";

const Basic = () => {
  const [test, setTest] = useState("");
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setTest(value);
  };
  return (
    <div>
      <div>
        <label htmlFor="testInput">useState Test</label>
        <input
          onChange={onChange}
          type="text"
          placeholder="입력하면 test값이 바뀝니다."
          name="testInput"
        />
      </div>
      <div>
        <p>test값 출력</p>
        <p className="testoutput">{test}</p>
      </div>
    </div>
  );
};

export default Basic;

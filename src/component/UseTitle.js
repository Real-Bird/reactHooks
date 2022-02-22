import React, { useEffect, useState } from "react";

const useTtile = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector(".title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const UseTitle = () => {
  const titleUpdater = useTtile("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  // loading 중 렌더링 페이지 옮기면 메모리 누수 경고 발생

  const onRefresh = () => location.reload();
  return (
    <div>
      <h1 className="title">UseTitle</h1>
      <button onClick={onRefresh}>새로고침</button>
    </div>
  );
};

export default UseTitle;

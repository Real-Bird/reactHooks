import React from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const UseNotification = () => {
  const triggerNotif = useNotification("계속 시도해보자!", {
    body: "삽질은 개발의 어머니!!!"
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default UseNotification;

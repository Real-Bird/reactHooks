import React, { useState } from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (!onCancel && typeof onConfirm !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const UseConfirm = () => {
  const deleteWorld = () => console.log("I'm deleted.");
  const cancelWorld = () => console.log("I'm canceled.");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, cancelWorld);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default UseConfirm;

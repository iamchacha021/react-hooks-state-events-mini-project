import React from "react";

function Task({ task, handleDelete}) {
  const handleOneDelete =()=>{
    handleDelete(task)
  }
  return (
    <div className="task">
      <div className="label">CATEGORY: {task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleOneDelete}>X</button>
    </div>
  );
}

export default Task;

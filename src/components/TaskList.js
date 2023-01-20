import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  return (
    <div className="tasks">
      {tasks.map((task)=>{
        return <Task key={task.text} task={task} handleDelete={handleDelete} />
      })}
    </div>
  );
}

export default TaskList;

import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories]= useState(CATEGORIES)

  const handleDelete = (clickedTask)=>{
    const filteredTask = tasks.filter((task)=>{
      return clickedTask.text !== task.text
    })
    setTasks(filteredTask)
  }

  const onTaskFormSubmit = (task)=>{
    setTasks([...tasks, task])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm categories={categories} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks}  handleDelete={handleDelete} />
    </div>
  );
}

export default App;

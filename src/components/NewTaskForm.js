import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("All")

  const handleSubmit = (ev)=>{
    ev.preventDefault()
    onTaskFormSubmit({text:details, category:category})
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={details}
          onChange={(ev)=> setDetails(ev.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(ev)=> setCategory(ev.target.value)}>
          {categories.map((category)=>{
            return(
              <option key={category} value={category}>{category}</option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

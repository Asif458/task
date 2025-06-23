import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");       
  const [tasks, setTasks] = useState([]);     
   
  const handleChange = (e) => {
    setTask(e.target.value);
  };
 
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
 
  const deleteTask= (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

     return (
    <div>
      <h2>to do app</h2>
      
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

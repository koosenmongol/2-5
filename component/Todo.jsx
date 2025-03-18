import React from "react";
import "./css/Todo.css";
import { useState } from "react";
const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState([]);
  const handleInput = (e) => {
    let text = e.target.value;
    setTaskText(text);
  };
  const addTask = () => {
    // handleInput();
    setTask((currenttask) => [...currenttask, taskText]);
    console.log(task);
  };
  return (
    <div className="container">
      <h1 style={{ width: 500, textAlign: "center" }}>To do</h1>
      <div style={{ width: 500 }}>
        <input onChange={handleInput} type="text" placeholder="Add ask" />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasklist">
        {task.map((onetask) => (
          <p>{onetask}</p>
        ))}
      </div>
    </div>
  );
};

export default Todo;

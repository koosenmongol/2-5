import React from "react";
import "./css/Todo.css";
import { useState } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState([]);
  const handleInput = (e) => {
    let text = e.target.value;
    setTaskText(text);
  };
  const addTask = () => {
    setTask((currenttask) => [...currenttask, taskText]);
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
          <div className="onetask">
            <RiCheckboxCircleFill /> <p>{onetask}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;

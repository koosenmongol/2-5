import React from "react";
import "./css/Todo.css";
import { useState } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Todo = () => {
  const [taskText, setTaskText] = useState("");
  const [task, setTask] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);
  const handleInput = (e) => {
    let text = e.target.value;
    setTaskText(text);
    console.log(task);
  };
  const addTask = () => {
    if (taskText !== "") setTask((currenttask) => [...currenttask, taskText]);
  };
  const removeTask = (i) => {
    setCompleteTask((currentCompleteTask) => [...currentCompleteTask, task[i]]);
    setTask((currenttask) => currenttask.filter((_, index) => index !== i));
    console.log(completeTask);
  };
  return (
    <div className="container">
      <h1 style={{ width: 500, textAlign: "center" }}>To do</h1>
      <div style={{ width: 500 }}>
        <input onChange={handleInput} type="text" placeholder="Add ask" />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="tasklistContainer">
        <div className="tasklist">
          <h4>Incomplete task</h4>
          {task.map((onetask, i) => (
            <button onClick={() => removeTask(i)} className="onetask">
              <RiCheckboxCircleFill /> <p>{onetask}</p>
            </button>
          ))}
        </div>

        <div className="tasklist">
          <h4>Completed task</h4>
          {completeTask.map((onetask, i) => (
            <button className="onetask">
              <RiCheckboxCircleFill /> <p>{onetask}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

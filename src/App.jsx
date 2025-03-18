import { useState } from "react";
import "./App.css";
import Movie from "../component/Movie";
import Inputexample from "../component/Inputexample";
import Changebutton from "../component/Changebutton";
import Todo from "../component/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Todo />
      </div>
    </>
  );
}

export default App;

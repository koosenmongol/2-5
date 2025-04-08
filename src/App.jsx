import { useState } from "react";
import "./App.css";
import Movie from "../component/Movie";
import Inputexample from "../component/Inputexample";
import Changebutton from "../component/Changebutton";
import Todo from "../component/Todo";
import Yawts from "../component/Yawts";
import Tictac from "../component/Tictac";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Tictac />
      </div>
    </>
  );
}

export default App;

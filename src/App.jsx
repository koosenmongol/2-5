import { useState } from "react";
import "./App.css";
import Movie from "../component/Movie";
import Inputexample from "../component/Inputexample";
import Changebutton from "../component/Changebutton";
import Todo from "../component/Todo";
import Yawts from "../component/Yawts";
import Tictac from "../component/Tictac";
import Shagai from "../component/Shagai";
import Memo from "../component/Memo";
import PropsTest from "../component/PropsTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <PropsTest />
      </div>
    </>
  );
}

export default App;

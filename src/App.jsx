import { useState } from "react";
import "./App.css";
import Movie from "../component/Movie";
import Inputexample from "../component/Inputexample";
import Changebutton from "../component/Changebutton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Changebutton />
    </>
  );
}

export default App;

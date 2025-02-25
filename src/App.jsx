import { useState } from "react";
import "./App.css";
import Movie from "../component/Movie";
import Inputexample from "../component/Inputexample";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Inputexample />
    </>
  );
}

export default App;

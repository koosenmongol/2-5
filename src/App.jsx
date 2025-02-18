import { useState } from "react";
import "./App.css";
import Movie from "../component/Movie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Movie />
    </>
  );
}

export default App;

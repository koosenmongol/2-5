import React, { useState } from "react";
import "./css/Tictac.css";
const Tictac = () => {
  const [boxText, setBoxText] = useState(Array(9).fill(""));
  const [lastCLick, setLastCLick] = useState("O");
  const [winCheck, setWinCheck] = useState(false);
  const [draw, setDraw] = useState(false);
  const [player, setPlayer] = useState("");
  const onChange = (index) => {
    if (winCheck || draw) return;

    if (boxText[index] === "") {
      boxText[index] = lastCLick === "X" ? "O" : "X";
      setBoxText([...boxText]);
      setLastCLick(boxText[index]);
      winner();
    }
  };
  const Resetgame = () => {
    setBoxText(boxText.fill(""));
    setWinCheck(false);
    setDraw(false);
    setLastCLick("O");
  };
  const winner = () => {
    let checkbox = boxText.filter((text) => text !== "");
    console.log(checkbox);
    console.log(checkbox.length);
    if (checkbox.length < 9) {
      if (
        boxText[0] === boxText[1] &&
        boxText[1] === boxText[2] &&
        boxText[2] !== ""
      ) {
        setPlayer(boxText[0]);
        setWinCheck(true);
      } else if (
        boxText[3] === boxText[4] &&
        boxText[4] === boxText[5] &&
        boxText[5] !== ""
      ) {
        setPlayer(boxText[3]);
        setWinCheck(true);
      } else if (
        boxText[6] === boxText[7] &&
        boxText[7] === boxText[8] &&
        boxText[8] !== ""
      ) {
        setPlayer(boxText[6]);
        setWinCheck(true);
      } else if (
        boxText[0] === boxText[3] &&
        boxText[6] === boxText[3] &&
        boxText[3] !== ""
      ) {
        setPlayer(boxText[0]);
        setWinCheck(true);
      } else if (
        boxText[1] === boxText[4] &&
        boxText[7] === boxText[4] &&
        boxText[4] !== ""
      ) {
        setPlayer(boxText[1]);
        setWinCheck(true);
      } else if (
        boxText[2] === boxText[5] &&
        boxText[5] === boxText[8] &&
        boxText[8] !== ""
      ) {
        setPlayer(boxText[5]);
        setWinCheck(true);
      } else if (
        boxText[0] === boxText[4] &&
        boxText[4] === boxText[8] &&
        boxText[8] !== ""
      ) {
        setPlayer(boxText[2]);
        setWinCheck(true);
      } else if (
        boxText[2] === boxText[4] &&
        boxText[6] === boxText[4] &&
        boxText[6] !== ""
      ) {
        setPlayer(boxText[2]);
        setWinCheck(true);
      }
    } else setDraw(true);
  };
  return (
    <div className="container">
      {draw && <h1>Тэнцлээ</h1>}
      {winCheck && <h1> {player} хожлоо</h1>}
      {(winCheck || draw) && <button onClick={Resetgame}>Reset game</button>}
      <div className="Tictac">
        {boxText.map((text, index) => (
          <div onClick={() => onChange(index)} className="box">
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tictac;

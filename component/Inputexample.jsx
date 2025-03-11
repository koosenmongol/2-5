// Санасан тоо таах тоглоомын код
import React, { useState } from "react";

const Inputexample = () => {
  const getnumber = () => {
    let number = Math.floor(Math.random() * 101);
    return number;
  };
  const [randomnumber, setRandomnumber] = useState(getnumber());
  const [live, setLive] = useState(5);
  const [resulttext, setResulttext] = useState("");
  const [inputnumber, setInputnumber] = useState("");
  const [reset, setReset] = useState(false);
  const inputdata = (e) => {
    let data = e.target.value;
    // if (data == "123456789") alert("Нэвтэрлээ");
    setInputnumber(data);
  };
  const taah = () => {
    if (live >= 1) {
      if (inputnumber > randomnumber) {
        setResulttext("Их байна");
        setLive(live - 1);
      } else if (inputnumber < randomnumber) {
        setResulttext("Бага байна");
        setLive(live - 1);
      } else {
        setResulttext("Хожлоо");
        setReset(true);
      }
    } else if (live == 0) {
      setReset(true);
      setResulttext("Та хожигдлоо");
    }
  };
  const resetGame = () => {
    setLive(5);
    setRandomnumber(getnumber);
    setReset(false);
  };
  return (
    <div>
      <h1>Inputexample</h1>
      <h2>Боломжын тоо: {live}</h2>

      <h2>{randomnumber}</h2>
      <h2>{resulttext}</h2>
      <div style={{ display: "flex" }}>
        <input
          type="number"
          style={{ width: 200, height: 100, fontSize: 50 }}
          placeholder="password"
          onChange={inputdata}
        />
        <button
          style={{
            width: 200,
            height: 100,
            fontSize: 50,
            display: "flex",
            alignItems: "center",
            backgroundColor: "blue",
            color: "white",
          }}
          onClick={taah}
        >
          Таах
        </button>
        {reset && (
          <button
            style={{
              width: 200,
              height: 100,
              fontSize: 30,
              display: "flex",
              alignItems: "center",
              backgroundColor: "orange",
              color: "white",
            }}
            onClick={resetGame}
          >
            Дахин эхлүүлэх
          </button>
        )}
      </div>
    </div>
  );
};

export default Inputexample;

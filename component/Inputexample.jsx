import React, { useState } from "react";

const Inputexample = () => {
  const getnumber = () => {
    let number = Math.floor(Math.random() * 101);
    return number;
  };
  const [randomnumber, setRandomnumber] = useState(getnumber());
  const [resulttext, setResulttext] = useState("");
  const [inputnumber, setInputnumber] = useState("");
  const inputdata = (e) => {
    let data = e.target.value;
    // if (data == "123456789") alert("Нэвтэрлээ");
    setInputnumber(data);
  };
  const taah = () => {
    if (inputnumber > randomnumber) setResulttext("Их байна");
    else if (inputnumber < randomnumber) setResulttext("Бага байна");
    else setResulttext("Хожлоо");
  };
  return (
    <div>
      <h1>Inputexample</h1>
      {/* <h2>input number {inputnumber}</h2>
      <h2>{randomnumber}</h2> */}
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
      </div>
    </div>
  );
};

export default Inputexample;

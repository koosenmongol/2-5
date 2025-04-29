import React, { useState } from "react";
import "./css/Memo.css";
const Memo = () => {
  let emoji = [
    "🐉",
    "⏰",
    "😊",
    "😂",
    "🤣",
    "❤️",
    "😍",
    "😒",
    "🐉",
    "⏰",
    "😊",
    "😂",
    "🤣",
    "❤️",
    "😍",
    "😒",
  ];
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const [clicked, setClicked] = useState([]);
  const [matched, setMatched] = useState([]);
  const [emojiBox, setEmojiBox] = useState(shuffleArray(emoji));
  const [win, setWin] = useState(false);
  const handleClick = (index) => {
    if (clicked.length < 2 && clicked[0] != index) {
      let newclicked = [...clicked, index];
      setClicked(newclicked);
      check(newclicked);
    }
  };
  const check = (array) => {
    if (array.length === 2) {
      const index1 = array[0];
      const index2 = array[1];
      if (emojiBox[index1] == emojiBox[index2]) {
        setMatched([...matched, emojiBox[index1]]);
        console.log(matched.length);
        setClicked([]);
        console.log("taasan");
        if (matched.length === 7) setWin(true);
      } else {
        setTimeout(() => {
          setClicked([]);
        }, 1000);
      }
    }
  };
  const Reset = () => {
    setWin(false);
    setMatched([]);
    setClicked([]);
    setEmojiBox(shuffleArray(emoji));
  };
  return (
    <div className="container">
      {win && (
        <div className="headContainer">
          {" "}
          <h2>Хожлоо баяр хүргэе!!!</h2>
          <button onClick={Reset}>Дахин эхлэх</button>
        </div>
      )}

      <div className="gameContainer">
        {emojiBox.map((emoji, index) => (
          <div className="onebox">
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="emojibox"
            >
              {clicked.includes(index) || matched.includes(emoji) ? emoji : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memo;

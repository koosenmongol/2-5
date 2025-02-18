import React, { useState } from "react";

const Review = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>Таалагдсан:{number}</p>
      <div className="buttonContainer">
        <button
          className="button"
          id="b1"
          onClick={() => setNumber(number + 1)}
        >
          <p> Таалагдсан</p>
        </button>
        <button
          className="button"
          id="b2"
          onClick={() => setNumber(number - 1)}
        >
          <p> Таалагдаагүй</p>
        </button>
        <button className="button" id="b3" onClick={() => setNumber(0)}>
          <p> Шинээр эхлэх</p>
        </button>
      </div>
    </div>
  );
};

export default Review;

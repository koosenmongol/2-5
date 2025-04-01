import React, { useState } from "react";
import { data } from "../data/yawts/yawtsdata";
import "./css/Yawts.css";
const Yawts = () => {
  const samsung = data[0];
  const apple = data[1];
  const [selectedCategory, setSetselectedCategory] = useState(samsung);

  return (
    <div className="container">
      <div className="category">
        <button
          onClick={() => setSetselectedCategory(samsung)}
          className="buttonStyle"
        >
          <p style={{ color: selectedCategory === samsung ? "red" : "black" }}>
            Samsung
          </p>
        </button>
        <button
          onClick={() => setSetselectedCategory(apple)}
          className="buttonStyle"
        >
          <p style={{ color: selectedCategory === apple ? "red" : "black" }}>
            Apple
          </p>
        </button>
      </div>
      <div className="product">
        {selectedCategory.map((phone, index) => (
          <div className="oneProduct">
            <img src={phone.img} alt="" />
            <p>{phone.name}</p>
            <p id="price">{phone.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yawts;

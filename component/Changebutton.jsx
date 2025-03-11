import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import "./css/Changebutton.css";
const Changebutton = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <div className="container">
      <IoIosStar size={100} color={active ? "gold" : "red"} />
      <button className={active ? "button" : "button1"} onClick={onClick}>
        {active ? "ON" : "OFF"}
        {/* if(active == true)
        ON'
        else 
        off */}
      </button>
      {active ? (
        <img className="image" src="../src/assets/smile.webp" alt="" />
      ) : (
        <img className="image" src="../src/assets/sad.jpg" alt="" />
      )}
      {active && <h2>Thank you!!!</h2>}
    </div>
  );
};

export default Changebutton;

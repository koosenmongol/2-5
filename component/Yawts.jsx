import React, { useState } from "react";
import { data } from "../data/yawts/yawtsdata";

import "./css/Yawts.css";
const Yawts = () => {
  const samsung = data[0];
  const apple = data[1];
  const [selectedCategory, setSetselectedCategory] = useState(samsung);
  const [cartItems, setCartItems] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(true);
  const handleCart = (phone) => {
    setCartItems((currentcartItems) => [...currentcartItems, phone]);
    console.log(cartItems);
  };
  const removeItem = (item) => {
    let items = (currentcartItems) =>
      currentcartItems.filter((phone) => phone.name !== item.name);
    setCartItems(items);
    setSetselectedCategory(items);
  };
  return (
    <div className="containerBox">
      {/* Ангилал */}
      <div className="category">
        <button
          onClick={() => {
            setSetselectedCategory(samsung);
            setIsOpenCart(true);
          }}
          className="buttonStyle"
        >
          <p style={{ color: selectedCategory === samsung ? "red" : "black" }}>
            Samsung
          </p>
        </button>
        <button
          onClick={() => {
            setSetselectedCategory(apple);
            setIsOpenCart(true);
          }}
          className="buttonStyle"
        >
          <p style={{ color: selectedCategory === apple ? "red" : "black" }}>
            Apple
          </p>
        </button>
      </div>
      {/* Бүтээгдэхүүн */}
      <div className="product">
        {selectedCategory.map((phone, index) => (
          <div className="oneProduct">
            <img src={phone.img} alt="" />
            <div>
              <p>{phone.name}</p>
              <p id="price">{phone.price}</p>
            </div>
            {isOpenCart && (
              <button className="cartButton" onClick={() => handleCart(phone)}>
                Сагслах
              </button>
            )}
          </div>
        ))}
      </div>
      {/* Сагс */}
      <div className="cart">
        <button
          className="cartButton"
          onClick={() => {
            setSetselectedCategory(cartItems);
            setIsOpenCart(false);
          }}
        >
          Сагс
        </button>
        {cartItems.map((item, index) => (
          <div>
            <p onClick={() => removeItem(item)}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Yawts;

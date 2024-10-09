import React from "react";
import "./assets/styles/app.scss";
import CartItem from "./assets/components/CartItem";
import Order from "./assets/components/Order";

const App = () => {
  const title = "Desserts";

  return (
    <div className="cart">
      <div className="cart-main">
        <h1 className="cart-main--h1">{title}</h1>
        <div className="cart-main--items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <Order />
    </div>
  );
};

export default App;

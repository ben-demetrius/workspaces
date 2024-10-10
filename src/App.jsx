import React from "react";
import "./assets/styles/app.scss";
import Order from "./assets/components/Order";
import CartItems from "./assets/components/CartItems";

const App = () => {
  const title = "Desserts";

  return (
    <div className="cart">
      <div className="cart-main">
        <h1 className="cart-main--h1">{title}</h1>
        <CartItems />
      </div>
      <Order />
    </div>
  );
};

export default App;

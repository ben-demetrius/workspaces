import React from "react";
import "../styles/order.scss";

const Order = () => {
  const orderTitle = "Your Cart";
  return (
    <div className="cart-order">
      <h2 className="cart-order--h2">{orderTitle} (3) </h2>
      <div className="cart-order-items">
        <div className="cart-order-item">
          <div className="cart-item-details">
            <p className="cart-order--name">Item Name</p>
            <div className="cart-item-rates">
              <p className="cart-item--quantity">4x</p>
              <p className="cart-item--price">@$5</p>
              <p className="cart-item--total">$20</p>
            </div>
          </div>

          <button className="cart-item--close-btn">
            <img src="/assets/images/icon-remove-item.svg" alt="Close Button" />
          </button>
        </div>

        <div className="cart-order-item">
          <div className="cart-item-details">
            <p className="cart-order--name">Item Name</p>
            <div className="cart-item-rates">
              <p className="cart-item--quantity">4x</p>
              <p className="cart-item--price">@$5</p>
              <p className="cart-item--total">$20</p>
            </div>
          </div>

          <button className="cart-item--close-btn">
            <img src="/assets/images/icon-remove-item.svg" alt="Close Button" />
          </button>
        </div>

        <div className="cart-order-item">
          <div className="cart-item-details">
            <p className="cart-order--name">Item Name</p>
            <div className="cart-item-rates">
              <p className="cart-item--quantity">4x</p>
              <p className="cart-item--price">@$5</p>
              <p className="cart-item--total">$20</p>
            </div>
          </div>

          <button className="cart-item--close-btn">
            <img src="/assets/images/icon-remove-item.svg" alt="Close Button" />
          </button>
        </div>
      </div>
      <div className="cart-total">
        <p className="cart-total--label">Order Total</p>
        <p className="cart-total--price">$20</p>
      </div>
      <div className="cart-carbon">
        <img src="/assets/images/icon-remove-item.svg" alt="Close Button" />
        <p className="cart-carbon--p">
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button className="cart-oder--confirm-btn">Confirm Order</button>
    </div>
  );
};

export default Order;

import React from "react";
import "../styles/cart-item.scss";

const CartItem = ({
  imageDesktop,
  imageTablet,
  imageMobile,
  name,
  category,
  price,
}) => {
  const addText = "Add to Cart";

  return (
    <div className="cart-item">
      <div className="cart-img-add-btn">
        <img
          className="cart--image hide-desktop"
          src={imageDesktop}
          alt="item image"
        />
        <img
          className="cart--image hide-tablet"
          src={imageTablet}
          alt="item image"
        />
        <img
          className="cart--image hide-mobile"
          src={imageMobile}
          alt="item image"
        />
        <button className="cart--button">
          <img
            src="/assets/images/icon-add-to-cart.svg"
            alt="Add to Cart Button"
          />
          <p className="cart-button--p">{addText}</p>
        </button>
      </div>
      <div className="cart-card-texts">
        <p className="cart--category">{category}</p>
        <p className="cart--name">{name}</p>
        <p className="cart--price">${price}</p>
      </div>
    </div>
  );
};

export default CartItem;

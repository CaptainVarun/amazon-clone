import React, { useState } from "react";
import "./CheckoutProduct.css";
import FlipMove from "react-flip-move";
import { useStateValue } from "./StateProvider";
import Magnifier from "react-magnifier";
import Payment from "./Payment";

function CheckoutProduct({ id, title, price, rating, image, hideButton }) {
  const [{}, dispatch] = useStateValue();
  const [fadeOut, setFadeOut] = useState(0);
 
  const removeFromBasket = () => {
    setFadeOut(1);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    // <div className="checkoutProduct">
    <div
      className={fadeOut > 0 ? "checkoutProduct fade-out" : "checkoutProduct"}
      onAnimationEnd={() => setFadeOut(0)}
    >
      {/* <img className="checkoutProduct__image" src={image} alt="" /> */}
      <Magnifier
        className="checkoutProduct__image"
        src={image}
        width={180}
        height={180}
        zoomFactor={2}
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;

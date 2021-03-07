import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
import Magnifier from "react-magnifier";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Basket is empty</h2>
            <p className="checkout__noitems">
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
            {/*               <CheckoutProduct
                id="12321341"
                title="The Lean Startup"
                price={29.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={5}
              /> */}
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>

      <div className="checkout__right">
        {basket?.length >= 1 ? <Subtotal /> : <> </>}
      </div>
    </div>
  );
}

export default Checkout;

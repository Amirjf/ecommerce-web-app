import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">
      <CustomButton inverted>go to checkout</CustomButton>
    </div>
  </div>
);
export default CartDropDown;

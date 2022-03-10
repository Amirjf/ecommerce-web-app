import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Cart is empty</span>
        )}
      </div>
      {cartItems.length ? (
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
          inverted
        >
          Checkout
        </CustomButton>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

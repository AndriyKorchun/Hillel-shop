import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const history = useHistory();
  const cartItems = [];

  const handleCheckoutRedirect = useCallback(() => {
    history.push('/checkout');
  }, [history]);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
            ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
            : <div className="empty-message">Your cart is empty</div>
        }
      </div>
      <CustomButton onClick={handleCheckoutRedirect}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;

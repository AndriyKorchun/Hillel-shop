import React from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss';

const CheckoutPage = () => {
  const cartItems = [];
  const cartItemsTotal = 0;

  return (
    <section className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block">Remove</div>
      </div>

      {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}

      <div className="total">
        Total: $
        { cartItemsTotal }
      </div>
    </section>
  );
};

export default CheckoutPage;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../features/modal/ModalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Shopping Cart</h2>
          <h4 className="empty-cart">Your cart is empty...</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h3>Shopping Cart</h3>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Empty Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

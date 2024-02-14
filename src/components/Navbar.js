import React from 'react';
import { useSelector } from 'react-redux';
import { CartIcon } from '../HeroIcons';

const Navbar = () => {
  //Destructuring assignment
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h2>Christmas Treats</h2>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

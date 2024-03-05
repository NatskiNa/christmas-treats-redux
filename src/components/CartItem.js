import React from 'react';
import { MinusIcon, PlusIcon } from '../HeroIcons';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../features/cart/CartSlice';

//receive {...item} from CartContainer
const CartItem = ({ id, name, maker, price, type, image, rating, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt="item images" />
      <div>
        <h4>{name}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;

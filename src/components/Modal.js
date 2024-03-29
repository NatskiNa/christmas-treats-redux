import React from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/ModalSlice';
import { clearCart } from '../features/cart/CartSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to empty the cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            CANCEL
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;

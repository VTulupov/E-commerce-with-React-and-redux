import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartPage.scss';
import phoneImg from './../../product-2.png';
import { getCartState, getCartTotal } from '../../selectors/phones';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../../actions/phones';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

const CartPage = () => {
  const phones = useSelector(getCartState);
  const total = useSelector(getCartTotal);
  const dispatch = useDispatch();

  const [ modal, setModal ] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);
  
  return (
    <div className='cart-page'>
      <div className="cart-page--grid">

        <div className="cart-page--items">
          {phones.length === 0 ? <h1>Your cart is currently empty</h1> : null}
          <div className="item-list" >
            {
              phones.length > 0 ?

              phones.map((phone) => {
                return (
                  <div className="item" key={phone.id}>
                    <div className="item--box">
                      <img src={phoneImg} alt="phone" />
                    </div>

                    <div className="item--details">
                      <p className="title">{phone.brand} {phone.name}</p>
                      <div className='block'>
                        <p className="price">{phone.price}$   ({phone.price * phone.quantity}$)</p>
                        <div className="flex-row">
                          <p className="quantity">Quantity: {phone.quantity}</p>
                          <div className='add' onClick={() => dispatch(addToCart(phone.id))}>+</div>
                          <div className='sub' onClick={() => dispatch(decrementFromCart(phone.id))}>-</div>
                        </div>
                      </div>
                      <button className='remove' onClick={() => dispatch(removeFromCart(phone.id))} >Remove</button>
                    </div>
                  </div>
                )
              })
              :
              null
            }
          </div>
        </div>

        <div className="cart-page--sidebar">
          <h2>My Cart</h2>
          <p className="total">Total: {total}$</p>
          <Link to='/' className='go-back'>Go Back</Link>
          <button className='clear-cart' disabled={phones.length === 0} onClick={() => {dispatch(clearCart())}}>Clear Cart</button>
          <button className='buy-now' onClick={openModal} disabled={phones.length === 0} >Buy Now!</button>
        </div>
      </div>
      <CheckoutModal modal={modal} closeModal={closeModal}/>
    </div>
  )
}

export default CartPage

// <button className='go-back' onClick={() => {history.push('/')}}>Go Back</button>
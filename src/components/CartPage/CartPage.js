import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './CartPage.scss';
import phoneImg from './../../product-2.png';
import { getCartState, getCartTotal } from '../../selectors/phones';
import { addToCart, removeFromCart, decrementFromCart, clearCart } from '../../actions/phones';

const CartPage = ({ history }) => {
  const phones = useSelector(getCartState);
  const total = useSelector(getCartTotal);
  const dispatch = useDispatch();
  
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
          <button className='go-back' onClick={() => {history.push('/')}}>Go Back</button>
          <button className='clear-cart' onClick={() => {dispatch(clearCart())}}>Clear Cart</button>
          <button className='buy-now'>Buy Now!</button>
        </div>
      </div>
    </div>
  )
}

export default CartPage

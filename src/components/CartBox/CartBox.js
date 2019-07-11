import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from './../../shopping-cart-solid.svg';
import { useSelector } from 'react-redux';
import './CartBox.scss';
import { getCartTotal, getCartState } from '../../selectors/phones';

const CartBox = () => {
  const cartInfo = useSelector(getCartState);
  const total = useSelector(getCartTotal);

  const itemQuantity = cartInfo
    .map((item) => item.quantity)
    .reduce((item, total) => item + total, 0);

  return (
    <Fragment>
      <Link to='/cart' className='cart-box'>
        <Cart height='30' width='30' color='white' />
        <p>{itemQuantity} items in cart {total}$</p>
      </Link>
    </Fragment>
  )
}

export default CartBox

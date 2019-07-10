import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from './../../shopping-cart-solid.svg';
import './CartBox.scss';

const CartBox = () => {
  return (
    <Fragment>
      <Link to='/cart' className='cart-box'>
        <Cart height='30' width='30' color='white' />
        <p>5 Items in cart 50$</p>
      </Link>
    </Fragment>
  )
}

export default CartBox

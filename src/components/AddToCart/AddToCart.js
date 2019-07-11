import React, { Fragment } from 'react'
import './AddToCart.scss'
import { ReactComponent as Cart } from './../../shopping-cart-solid.svg';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/phones';

const AddToCart = ({ phone }) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <button className='add-to-cart mb-small' onClick={() => dispatch(addToCart(phone.id))}>
        <Cart height='15' width='15' color='white' className='cart' />
        Add 
      </button>
    </Fragment>
  )
}

export default AddToCart

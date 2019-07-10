import React, { Fragment } from 'react'
import './AddToCart.scss'
import { ReactComponent as Cart } from './../../shopping-cart-solid.svg';

const AddToCart = () => {
  return (
    <Fragment>
      <button className='add-to-cart mb-small'>
        <Cart height='15' width='15' color='white' className='cart' />
        Add 
      </button>
    </Fragment>
  )
}

export default AddToCart

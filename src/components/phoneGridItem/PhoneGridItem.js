import React from 'react';
import { useSelector } from 'react-redux';
import './PhoneGridItem.scss';
import phoneImg from './../../product-2.png';
import AddToCart from '../AddToCart/AddToCart';
import { Link } from 'react-router-dom';

const PhoneGridItem = () => {
  const phones = useSelector((state) => state.phonesReducer.phones);

  return (
    phones.map((phone) => {
      return (
        <div className='phone-item' key={phone.id}>
          <div className="phone-item--box">
            <img src={phoneImg} alt="phone" className='phone-item--img' />
          </div>
          <div className="phone-item--info">
            <div className="flex-row">
              <p className="title">{phone.type} {phone.name}</p>
              <p className="price">${phone.price}</p>
            </div>
            <p className="description">{phone.description.substring(0, 53)}...</p>
          </div>
          <div className="buttons">
            <AddToCart />
          <Link to={`/phones/${phone.id}`} className='more-info'>
            More Info
          </Link>
          </div>
        </div>
      )
    })
  )
}

export default PhoneGridItem

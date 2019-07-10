import React from 'react';
import { useSelector } from 'react-redux';
import './PhoneGridItem.scss';
import phoneImg from './../../product-2.png';
import AddToCart from '../AddToCart/AddToCart';
import { Link } from 'react-router-dom';

const PhoneGridItem = () => {
  const phones = useSelector((state) => state.phonesReducer.phones);
  const filters = useSelector((state) => state.filtersReducer);

  // Search and checkbox filter solution
  const filteredPhones = phones.filter((phone) => {
    const searchText = (phone.brand.toLowerCase() + ' ' + phone.name.toLowerCase()).includes(filters.name.toLowerCase().trim())

    if (filters.brand.length > 0 && filters.name.length === 0) {
      return filters.brand.includes(phone.brand)
    } else if (filters.name.length !== 0 && filters.brand.length === 0)  {
      return searchText
    } else if (filters.name.length > 0 && filters.name.length > 0) {
      return filters.brand.includes(phone.brand) && searchText;
    } else {
      return phone
    }
  });

  return (
    filteredPhones.map((phone) => {
      return (
        <div className='phone-item' key={phone.id}>
          <div className="phone-item--box">
            <img src={phoneImg} alt="phone" className='phone-item--img' />
          </div>
          <div className="phone-item--info">
            <div className="flex-row">
              <p className="title">{phone.brand} {phone.name}</p>
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

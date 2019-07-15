import React from 'react';
import './PhoneGridItem.scss';
import { useDispatch } from 'react-redux';
import phoneImg from './../../product-2.png';
import AddToCart from '../AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { clearFilters } from '../../actions/filters';

const PhoneGridItem = ({ phone }) => {
  const dispatch = useDispatch();

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
        <AddToCart phone={phone}/>
        <Link to={`/phones/${phone.id}`} className='more-info' onClick={() => dispatch(clearFilters())}>
          More Info
          </Link>
      </div>
    </div>
  )
}

PhoneGridItem.propTypes = {
  phone: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    stats: PropTypes.shape({
      size: PropTypes.string,
      resolution: PropTypes.string,
      GPU: PropTypes.string,
      CPU: PropTypes.string,
      camera: PropTypes.string,
      battery: PropTypes.string
    })
  })
};

export default PhoneGridItem;

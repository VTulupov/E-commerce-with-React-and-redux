import React from 'react';
import { useSelector } from 'react-redux';
import './Phone.scss';
import CartBox from './../CartBox/CartBox';
import AddToCart from './../AddToCart/AddToCart';
import { Link } from 'react-router-dom';
import phoneImg from './../../product-2.png';

const Phone = ({ match }) => {
  const phones = useSelector((state) => state.phones);
  const phoneId = phones.find(({ id }) => id === match.params.id);

  return (
    <div className="phone-details">
      <div className="phone-details--grid">

        <div className="phone">
          <div className="phone--box">
            <img src={phoneImg} alt="phone"/>
          </div>
          <div className="phone--title">
            <h3>{phoneId.type} {phoneId.name}</h3>
            <h3>${phoneId.price}</h3>
          </div>
          <div className="phone--description">
            <p>{phoneId.description}</p>
          </div>

        </div>

        <div className="phone-stats">
          <h1>Phone Details</h1>
          <div className="stat">
            <h2>Type</h2>
            <p>{phoneId.type}</p>
          </div>
          {
            Object.entries(phoneId.stats).map(([key, value]) => {
              return (
                <div className="stat" key={key}>
                  <h2>{key}</h2>
                  <p>{value.toString()}</p>
                </div>
              )
            })
          }
        </div>

        <div className='phone-sidebar'>
          <CartBox />
          <div className="cart-info">
            <h3>{phoneId.type} {phoneId.name} ${phoneId.price}</h3>
          </div>
          <AddToCart />
          <Link to='/' className='back-to-store'>
            Back to store
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Phone

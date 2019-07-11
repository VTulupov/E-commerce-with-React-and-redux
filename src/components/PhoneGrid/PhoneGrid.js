import React from 'react'
import './PhoneGrid.scss';
import PhoneGridItem from '../phoneGridItem/PhoneGridItem';
import { getFilteredPhones } from '../../selectors/phones';
import { useSelector } from 'react-redux';

const PhoneGrid = () => {
  const filteredPhones = useSelector(getFilteredPhones);
  return (
    <div className="phone-grid">
      {filteredPhones.map((phone) => <PhoneGridItem phone={phone} key={phone.id}/>)}
    </div>
  )
}

export default PhoneGrid

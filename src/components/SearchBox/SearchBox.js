import React, { useState } from 'react';
import './SearchBox.scss';
import CartBox from '../CartBox/CartBox';

const SearchBox = () => {
  const [ value, setValue ] = useState('');

  const searchPhone = (e) => {
    setValue(e.target.value.trim());
    console.log(value);
  }

  return (
    <div className="search-box">
      <CartBox />
      <h3>Search Phones</h3>
      <input 
      className='search-box--input' 
      type="text" 
      value={value} 
      onChange={searchPhone}
      placeholder='Search...'
      />
    </div>
  )
}

export default SearchBox

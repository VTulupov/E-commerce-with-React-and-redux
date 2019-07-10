import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBox.scss';
import CartBox from '../CartBox/CartBox';
import { setTextFilter } from '../../actions/filters';

const SearchBox = () => {
  const inputValue = useSelector((state) => state.filtersReducer.name);
  const dispatch = useDispatch();

  const searchPhone = (e) => {
    const value = e.target.value;
    dispatch(setTextFilter(value));
  }

  return (
    <div className="search-box">
      <CartBox />
      <h3>Search Phones</h3>
      <input 
      className='search-box--input' 
      type="text" 
      value={inputValue} 
      onChange={searchPhone}
      placeholder='Search...'
      />
    </div>
  )
}

export default SearchBox

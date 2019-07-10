import React from 'react';
import './FilterList.scss';
import FilterListItem from '../FilterListItem/FilterListItem';

const FilterList = () => {
  return (
    <div className="check-box">
      <h3>Filter by brand</h3>
      <FilterListItem />
    </div>
  )
}

export default FilterList

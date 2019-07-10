import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './FilterListItem.scss';
import { setCheckboxFilter, removeCheckboxFilter } from '../../actions/filters';

const FilterListItem = () => {
  const phones = useSelector((state) => state.phonesReducer.phones);
  // const filterMark = useSelector((state) => state.filtersReducer.mark);
  const dispatch = useDispatch();

  const handleFilterMark = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setCheckboxFilter(value))
    } else {
      dispatch(removeCheckboxFilter(value))
    }
  }

  const phoneMarks = phones.map((phone, i) => phone.mark).reduce((unique, mark) => unique.includes(mark) ? unique : [...unique, mark], [])

  // const uniq = new Set(phoneArr)
  // const phoneList = [...uniq]

  const filteredPhoneMarks = phoneMarks.map((phone, i) => {
    return (
      <div className='filter-list' key={i} >
        <input type="checkbox" name={phone} id={phone} value={phone} onChange={(e) => handleFilterMark(e)} />
        <label htmlFor={phone}>{phone} ({phone.length})</label>
      </div>
    )
  })

  return (
    <Fragment>
      {filteredPhoneMarks}
    </Fragment>
  )
}

export default FilterListItem

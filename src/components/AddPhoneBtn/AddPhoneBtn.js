import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../actions/filters';
import './AddPhoneBtn.scss'

const AddPhoneBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className='add-phone'>
      <Link to='/add-phone-form' className='add-phone--btn' onClick={() => dispatch(clearFilters())}>
        ADD A NEW PHONE
      </Link>
    </div>
  )
}

export default AddPhoneBtn

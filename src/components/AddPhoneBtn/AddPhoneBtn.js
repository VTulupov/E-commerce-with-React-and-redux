import React from 'react';
import { Link } from 'react-router-dom';
import './AddPhoneBtn.scss'

const AddPhoneBtn = () => {
  return (
    <div className='add-phone'>
      <Link to='/' className='add-phone--btn'>
        ADD A NEW PHONE
      </Link>
    </div>
  )
}

export default AddPhoneBtn

import React, { useState, useEffect, Fragment } from 'react'
import './PhoneGrid.scss';
import PhoneGridItem from '../phoneGridItem/PhoneGridItem';
import { getFilteredPhones } from '../../selectors/phones';
import { useSelector } from 'react-redux';

const PhoneGrid = () => {
  const filteredPhones = useSelector(getFilteredPhones);
  // Set pagination and limit phones 12 per page
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ phonesPerPage ] = useState(12);

  // Get current phones
  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPost = indexOfLastPhone - phonesPerPage;
  const currentPhones = filteredPhones.slice(indexOfFirstPost, indexOfLastPhone);

  // Get pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPhones.length / phonesPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (filteredPhones.length < 12) {
      setCurrentPage(1)
    }
  }, [filteredPhones])

  // Change page
  const paginate = (number) => setCurrentPage(number);

  return (
    <Fragment>
      <div className="phone-grid">
        {currentPhones.map((phone) => <PhoneGridItem phone={phone} key={phone.id}/>)}
      </div>
      <div className="pagination">
        <ul>
          {
            filteredPhones.length > 12 ? pageNumbers.map((number) => (
              <li className={currentPage === number ? 'active' : ''} key={number} onClick={() => paginate(number)}>
                {number}
              </li>
            )) :
              null
          }
          <div className="bar"></div>
        </ul>
      </div>
    </Fragment>
  )
}

export default PhoneGrid

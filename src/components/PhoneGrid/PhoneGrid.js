import React, { useState, Fragment } from 'react'
import './PhoneGrid.scss';
import PhoneGridItem from '../phoneGridItem/PhoneGridItem';
import { getFilteredPhones } from '../../selectors/phones';
import { useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const PhoneGrid = () => {
  const filteredPhones = useSelector(getFilteredPhones);
  // Set pagination and limit phones 12 per page
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ phonesPerPage ] = useState(12);
  const [ value, setValue ] = useState(0); 
  const handleChange = (newValue) => setValue(newValue);

  // Get current phones
  const indexOfLastPhone = currentPage * phonesPerPage;
  const indexOfFirstPost = indexOfLastPhone - phonesPerPage;
  const currentPhones = filteredPhones.slice(indexOfFirstPost, indexOfLastPhone);

  // Get pages
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPhones.length / phonesPerPage); i++) {
    pageNumbers.push(i);
  }

  // Change page
  const paginate = (number) => setCurrentPage(number)

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

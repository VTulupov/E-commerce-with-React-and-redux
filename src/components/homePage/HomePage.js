import React from 'react'
import SearchBox from '../SearchBox/SearchBox';
import FilterList from '../FilterList/FilterList';
import PhoneGrid from '../PhoneGrid/PhoneGrid';
import AddPhoneBtn from '../AddPhoneBtn/AddPhoneBtn';

const HomePage = () => {
  return (
    <div className="App">
      <SearchBox />
      <FilterList />
      <AddPhoneBtn />
      <div className='main-grid'>
        <PhoneGrid />
      </div>
    </div>
    
  )
}

export default HomePage

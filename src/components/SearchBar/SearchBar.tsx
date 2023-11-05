import { useState } from 'react';
import { Link } from 'react-router-dom';

import ErrorTriggerButton from '../ErrorTrigger/ErrorTrigger';

const SearchBar: React.FC = () => {
  const [searchChar, setSearchChar] = useState('');

  const handleSearch = () => {
    if (searchChar) {
      localStorage.setItem('search', searchChar);
      // fetchData(`/?search=${searchChar}`);
    }
  };

  const clearSearch = () => {
    localStorage.clear();
    setSearchChar('');
  };

  return (
    <div className='searchbar'>
      <ErrorTriggerButton />

      <input
        type='text'
        placeholder='Explore Star Wars characters'
        className='searchbar__input'
        onChange={(e) => setSearchChar(e.target.value)}
      />

      <button className='searchbar__btn search__btn' onClick={handleSearch}>
        Search
      </button>
      <Link to='/'>
        <button className='searchbar__btn clear__btn' onClick={clearSearch}>
          Clear
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;

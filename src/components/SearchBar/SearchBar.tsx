import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/ContextProvider';
import ErrorTriggerButton from '../ErrorTrigger/ErrorTrigger';

const SearchBar = () => {
  const { search, updateSearch, perPage } = useContext(AppContext);

  const handleSearch = () => {
    if (search) {
      updateSearch(search);
    }
  };

  const clearSearch = () => {
    localStorage.clear();
    updateSearch('');
  };

  return (
    <div className='searchbar'>
      <ErrorTriggerButton />

      <input
        type='text'
        placeholder='Explore Star Wars characters'
        className='searchbar__input'
        value={search}
        onChange={(e) => updateSearch(e.target.value)}
      />

      <Link to={`/?perPage=${perPage}&search=${search}`}>
        <button className='searchbar__btn search__btn' onClick={handleSearch}>
          Search
        </button>
      </Link>
      <Link to={`/?perPage=${perPage}`}>
        <button className='searchbar__btn clear__btn' onClick={clearSearch}>
          Clear
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;

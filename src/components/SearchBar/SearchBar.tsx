import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearSearchValue, setSearchValue } from '../../store/searchSlice';
import { IRootState } from '../../types/interfaces';
import ErrorTriggerButton from '../ErrorTrigger/ErrorTrigger';

const SearchBar = () => {
  const perPage = useSelector((state: IRootState) => state.perPage);

  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchValue(searchWord));
  };

  const clearSearch = () => {
    localStorage.clear();
    dispatch(clearSearchValue());
    setSearchWord('');
  };

  return (
    <div className='searchbar'>
      <ErrorTriggerButton />

      <input
        type='text'
        placeholder='Explore Star Wars characters'
        className='searchbar__input'
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        data-testid='searchInput'
      />

      <Link to={`/?perPage=${perPage}&search=${searchWord}`}>
        <button
          className='searchbar__btn search__btn'
          onClick={handleSearch}
          data-testid='searchBtn'
        >
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

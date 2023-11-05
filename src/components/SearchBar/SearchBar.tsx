import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ICharacterListProps } from '../../types/interfaces';
import ErrorTriggerButton from '../ErrorTrigger/ErrorTrigger';

const SearchBar: React.FC<ICharacterListProps> = (
  props: ICharacterListProps
) => {
  const storageSearch = localStorage.getItem('search');
  const [searchChar, setSearchChar] = useState(
    storageSearch ? storageSearch : ''
  );

  const handleSearch = () => {
    if (searchChar) {
      localStorage.setItem('search', searchChar);
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

      <Link to={`/?perPage=${props.loadedData.perPage}&search=${searchChar}`}>
        <button className='searchbar__btn search__btn' onClick={handleSearch}>
          Search
        </button>
      </Link>
      <Link to={`/?perPage=${props.loadedData.perPage}`}>
        <button className='searchbar__btn clear__btn' onClick={clearSearch}>
          Clear
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;

import { useContext, useState } from 'react';

import { CharacterContext } from '../../pages/Home/Home';
import ErrorTriggerButton from '../ErrorTrigger/ErrorTrigger';

const SearchBar: React.FC = () => {
  const [searchChar, setSearchChar] = useState('');

  const { fetchData } = useContext(CharacterContext);

  const handleSearch = () => {
    if (searchChar) {
      localStorage.setItem('search', searchChar);
      fetchData(`/?search=${searchChar}`);
    }
  };

  const clearSearch = () => {
    localStorage.clear();

    setSearchChar('');
    fetchData('');
  };

  return (
    <div className='searchbar'>
      <ErrorTriggerButton />

      <input
        type='text'
        placeholder='Explore Star Wars characters'
        className='searchbar__input'
        onChange={(e) => setSearchChar(e.target.value)}
        value={searchChar}
      />

      <button className='searchbar__btn search__btn' onClick={handleSearch}>
        Search
      </button>
      <button className='searchbar__btn clear__btn' onClick={clearSearch}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;

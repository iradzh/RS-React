import { ChangeEvent, useState } from 'react';

import { ISearchBarProps, ISearchBarState } from '../../types/interfaces';
import ErrorTriggerButton from '../ErrorTrigger/ErrorTrigger';

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const storedSearch = localStorage.getItem('search');
  const [state, setState] = useState<ISearchBarState>({
    searchChar: storedSearch || '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ searchChar: event.target.value });
  };

  const handleSearch = () => {
    props.onSearch(state.searchChar);
  };

  const handleClear = () => {
    localStorage.clear();
    setState({ searchChar: '' });
    props.onClear();
  };

  return (
    <div className='searchbar'>
      <ErrorTriggerButton />

      <input
        type='text'
        placeholder='Explore Star Wars characters'
        className='searchbar__input'
        value={state.searchChar}
        onChange={handleInputChange}
      />

      <button className='searchbar__btn search__btn' onClick={handleSearch}>
        Search
      </button>
      <button className='searchbar__btn clear__btn' onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;

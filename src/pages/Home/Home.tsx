import { createContext } from 'react';

import { loadList } from '../../api/service';
import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import { IValue } from '../../types/interfaces';
import { defaultContext } from '../../util/constants';
export const CharacterContext = createContext(defaultContext);

export const Home = () => {
  const storedSearch = localStorage.getItem('search');
  const searchUrl = storedSearch ? `/?search=${storedSearch}` : '';
  const { response, isLoading, error, fetchData } = loadList(searchUrl);

  const value: IValue = {
    response,
    isLoading,
    error,
    fetchData,
  };
  return (
    <CharacterContext.Provider value={value}>
      <SearchBar />
      <Settings />
      <CharacterList />
    </CharacterContext.Provider>
  );
};

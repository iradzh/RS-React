import { createContext } from 'react';

import { loadData } from '../../api/service';
import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { IValue } from '../../types/interfaces';
import { defaultContext } from '../../util/constants';

export const CharacterContext = createContext(defaultContext);

export const Home = () => {
  const { response, isLoading, error, fetchData } = loadData('');

  const value: IValue = {
    response,
    isLoading,
    error,
    fetchData,
  };

  return (
    <CharacterContext.Provider value={value}>
      <SearchBar />
      <CharacterList />
    </CharacterContext.Provider>
  );
};

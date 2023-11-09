import { createContext, useEffect, useState } from 'react';

import {
  IApiResponse,
  IAppContext,
  IAppContextProviderProps,
  ICharacter,
  ILoadedData,
} from '../types/interfaces';

export const defaultValue: IAppContext = {
  search: '',
  updateSearch: () => {},
  charList: [],
  updateCharList: () => {},
  response: { count: 0, previous: '', next: '', results: [] },
  updateResponse: () => {},
  perPage: 10,
  updatePerPage: () => {},
  pageNum: 1,
  updatePageNum: () => {},
};

export const AppContext = createContext(defaultValue);

const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = useState<string>('');
  const updateSearch = (newSearch: string) => {
    setSearch(newSearch);
  };
  const [charList, setCharList] = useState<ICharacter[]>([]);
  const updateCharList = async (loadedData: ILoadedData) => {
    setCharList(loadedData.res.results);
  };

  const [response, setResponse] = useState<IApiResponse>({
    count: 0,
    previous: '',
    next: '',
    results: [],
  });
  const updateResponse = (loadedData: ILoadedData) => {
    setResponse(loadedData.res);
  };

  const [perPage, setPerPage] = useState<number>(10);
  const updatePerPage = (newPerPage: number) => {
    setPerPage(newPerPage);
  };

  const [pageNum, setpageNum] = useState<number>(1);
  const updatePageNum = (newPageNum: number) => {
    setpageNum(newPageNum);
  };

  useEffect(() => {
    const storageSearch = localStorage.getItem('search');
    if (storageSearch) {
      setSearch(storageSearch);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('search', search);
  }, [search]);

  const contextValue: IAppContext = {
    search,
    updateSearch,
    charList,
    updateCharList,
    response,
    updateResponse,
    perPage,
    updatePerPage,
    pageNum,
    updatePageNum,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

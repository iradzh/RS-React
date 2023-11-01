import "./components/SearchBar/SearchBar.scss";

import { useEffect, useState } from "react";

import CharachterService from "./api/service";
import CharacterList from "./components/CharacterList/CharacterList";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import SearchBar from "./components/SearchBar/SearchBar";
import { IAppState, ICharacter } from "./types/interfaces";

const App = () => {
  const charService = new CharachterService();
  const [state, setState] = useState<IAppState>({
    searchChar: "",
    searchResults: [],
    loading: true,
    charList: [],
  });

  useEffect(() => {
    const storedSearch = localStorage.getItem("search");

    if (storedSearch) {
      setState((prevState) => ({
        ...prevState,
        searchChar: storedSearch,
      }));
      searchCharacters(storedSearch);
    } else {
      onRequest();
    }
  }, []);

  const onRequest = () => {
    charService.getAllCharacters().then(onCharListLoaded);
  };

  const onCharListLoaded = (newCharList: ICharacter[]) => {
    setState((prevState) => ({
      ...prevState,
      charList: newCharList,
      loading: false,
    }));
  };

  const searchCharacters = (searchChar: string) => {
    if (searchChar.trim() === "") {
      onRequest();
    } else {
      setState((prevState) => ({
        ...prevState,
        loading: true,
      }));

      localStorage.setItem("search", searchChar);

      charService
        .searchCharacter(searchChar)
        .then((searchResults: ICharacter[]) => {
          setState((prevState) => ({
            ...prevState,
            searchResults,
            loading: false,
            charList: searchResults.length > 0 ? searchResults : [],
          }));
        })
        .catch((error) => {
          console.error(error);
          setState((prevState) => ({
            ...prevState,
            searchResults: [],
            loading: false,
          }));
        });
    }
  };

  const clearSearch = () => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
      searchChar: "",
      searchResults: [],
    }));
    onRequest();
  };

  const { searchResults, charList, loading } = state;
  const charactersToDisplay =
    searchResults.length > 0 ? searchResults : charList;

  return (
    <ErrorBoundary>
      <SearchBar
        searchChar={state.searchChar}
        onSearch={searchCharacters}
        onClear={clearSearch}
        onInputChange={(e) =>
          setState((prevState) => ({
            ...prevState,
            searchChar: e.target.value,
          }))
        }
      />
      <CharacterList characters={charactersToDisplay} loading={loading} />
    </ErrorBoundary>
  );
};

export default App;

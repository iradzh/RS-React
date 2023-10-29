import "./components/SearchBar/SearchBar.scss";

import { Component } from "react";

import CharachterService from "./api/service";
import CharacterList from "./components/CharacterList/CharacterList";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import ErrorTriggerButton from "./components/ErrorTrigger/ErrorTrigger";
import SearchBar from "./components/SearchBar/SearchBar";
import { IAppState, ICharacter } from "./types/interfaces";

class App extends Component<object, IAppState> {
  charService = new CharachterService();

  constructor(props: object) {
    super(props);
    this.state = {
      searchChar: "",
      searchResults: [],
      loading: true,
      charList: [],
    };
  }

  componentDidMount() {
    const storedSearch = localStorage.getItem("search");

    if (storedSearch) {
      this.setState({ searchChar: storedSearch }, () => {
        this.searchCharacters(storedSearch);
      });
    } else {
      this.onRequest();
    }
  }

  onRequest = () => {
    this.charService.getAllCharacters().then(this.onCharListLoaded);
  };

  onCharListLoaded = (newCharList: ICharacter[]) => {
    this.setState({ charList: newCharList, loading: false });
  };

  searchCharacters = (searchChar: string) => {
    if (searchChar.trim() === "") {
      this.onRequest();
    } else {
      this.setState({ loading: true });

      localStorage.setItem("search", searchChar);

      this.charService
        .searchCharacter(searchChar)
        .then((searchResults: ICharacter[]) => {
          this.setState({ searchResults, loading: false });

          if (searchResults.length > 0) {
            this.setState({ charList: searchResults });
          } else {
            this.setState({ charList: [] });
          }
        })
        .catch((error) => {
          console.error(error);
          this.setState({ searchResults: [], loading: false });
        });
    }
  };

  clearSearch = () => {
    this.setState(
      {
        loading: true,
        searchChar: "",
        searchResults: [],
      },

      () => this.onRequest(),
    );
  };

  render() {
    const { searchResults, charList, loading } = this.state;
    const charactersToDisplay =
      searchResults.length > 0 ? searchResults : charList;

    return (
      <ErrorBoundary>
        <SearchBar
          searchChar={this.state.searchChar}
          onSearch={this.searchCharacters}
          onClear={this.clearSearch}
          onInputChange={(e) => this.setState({ searchChar: e.target.value })}
        />
        <ErrorTriggerButton />
        <CharacterList characters={charactersToDisplay} loading={loading} />
      </ErrorBoundary>
    );
  }
}

export default App;

import React, { Component } from 'react';

import CharachterService from './api/service';
import CharacterList from './components/CharacterList/CharacterList';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { AppState, ICharacter } from './types/interfaces';

class App extends Component<object, AppState> {
  charService = new CharachterService();

  constructor(props: object) {
    super(props);
    this.state = {
      searchChar: '',
      searchResults: [],
      loading: true,
      charList: [],
    };
  }
  componentDidMount() {
    this.onRequest();
  }

  onRequest = () => {
    this.charService.getAllCharacters().then(this.onCharListLoaded);
    // .catch(this.onError);
  };

  onCharListLoaded = (newCharList: ICharacter[]) => {
    this.setState({ charList: newCharList, loading: false });
  };

  searchCharacters = () => {
    this.setState({ loading: true });
    this.charService
      .searchCharacter(this.state.searchChar)
      .then((searchResults: ICharacter[]) => {
        this.setState({ searchResults, loading: false });

        if (searchResults.length > 0) {
          this.setState({ charList: searchResults });
        }
      })
      .catch((error) => {
        console.error(error);
        this.setState({ searchResults: [], loading: false });
      });
  };

  render() {
    const { searchResults, charList, loading } = this.state;
    const charactersToDisplay =
      searchResults.length > 0 ? searchResults : charList;

    return (
      <ErrorBoundary>
        <div className='app'>
          <div className='header'>
            <input
              type='text'
              placeholder='Explore Star Wars characters'
              className='search__input'
              value={this.state.searchChar}
              onChange={(e) => this.setState({ searchChar: e.target.value })}
            />
            <button className='search__btn' onClick={this.searchCharacters}>
              Search
            </button>
          </div>
          <CharacterList characters={charactersToDisplay} loading={loading} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;

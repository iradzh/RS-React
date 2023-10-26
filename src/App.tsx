import React, { Component } from 'react';
import getData from './service';
import { AppState, CharachterProps } from './types/constants';
import Character from './components/Character/Charachter';
import Spinner from './components/Spinner/Spinner';
import './App.scss';

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
      data: null,
    };
  }

  async componentDidMount() {
    try {
      const data = await getData();
      this.setState({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <div className="app">
        <div className="header">
          <input type="text" placeholder="Search" className="search__input" />
          <button className="search__btn">Search</button>
        </div>
        <div className="main">
          {this.state.data ? this.state.data.name : <Spinner />}
          <div className="main__container">
            {this.state.data &&
              this.state.data.results.map(
                (data: CharachterProps, index: number) => (
                  <Character
                    name={data.name}
                    birth_year={data.birth_year}
                    eye_color={data.eye_color}
                    key={index}
                  />
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

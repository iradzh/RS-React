import React, { Component } from 'react';
import getData from './service';
import { AppState, result } from './types/constants';

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
          <h3>{this.state.data ? this.state.data.name : 'Loading...'}</h3>
          <ul>
            {this.state.data &&
              this.state.data.results.map((result: result, index: number) => (
                <li key={index}>
                  <h3>{result.name}</h3>
                  <h3>{result.birth_year}</h3>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

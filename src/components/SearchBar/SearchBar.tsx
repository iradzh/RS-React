import React, { ChangeEvent, Component } from 'react';

import r2d2 from '../../assets/r2d2.png';
import { ISearchBarProps, ISearchBarState } from '../../types/interfaces';

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      searchChar: props.searchChar,
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchChar: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchChar);
  };

  handleClear = () => {
    this.setState({ searchChar: '' });
    this.props.onClear();
  };

  render() {
    return (
      <div className='searchbar'>
        <img alt='r2d2' src={r2d2} />
        <input
          type='text'
          placeholder='Explore Star Wars characters'
          className='searchbar__input'
          value={this.state.searchChar}
          onChange={this.handleInputChange}
        />

        <button
          className='searchbar__btn search__btn'
          onClick={this.handleSearch}
        >
          Search
        </button>
        <button
          className='searchbar__btn clear__btn'
          onClick={this.handleClear}
        >
          Clear
        </button>
      </div>
    );
  }
}

export default SearchBar;

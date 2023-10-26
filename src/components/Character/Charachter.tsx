import React, { Component } from 'react';

import './Character.scss';

import { CharachterProps } from '../../types/constants';

class Character extends Component<CharachterProps> {
  render() {
    return (
      <div className="char">
        <h1>{this.props.name}</h1>
        <h2>birth_year: {this.props.birth_year}</h2>
        <h2>eye_color: {this.props.eye_color}</h2>
      </div>
    );
  }
}

export default Character;

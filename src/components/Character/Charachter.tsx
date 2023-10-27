import React, { Component } from 'react';
import { Charachter } from '../../types/constants';
import './Character.scss';

class Character extends Component<Charachter> {
  render() {
    return (
      <div className="char">
        <h1 className="char__name">{this.props.name}</h1>
        <p className="char__text">
          Birth Year: <span>{this.props.birth_year}</span>
        </p>
        <p className="char__text">
          Eye Color: <span>{this.props.eye_color}</span>
        </p>
        <p className="char__text">
          Skin Color: <span>{this.props.skin_color}</span>
        </p>
        <p className="char__text">
          Gender: <span>{this.props.gender}</span>
        </p>
      </div>
    );
  }
}

export default Character;

import "./Character.scss";

import React, { Component } from "react";

import { ICharacterProps } from "../../types/interfaces";

class Character extends Component<ICharacterProps> {
  render() {
    return (
      <div className="char">
        <h1 className="char__name">{this.props.char.name}</h1>
        <p className="char__text">
          Birth Year: <span>{this.props.char.birth_year}</span>
        </p>
        <p className="char__text">
          Eye Color: <span>{this.props.char.eye_color}</span>
        </p>
        <p className="char__text">
          Skin Color: <span>{this.props.char.skin_color}</span>
        </p>
        <p className="char__text">
          Gender: <span>{this.props.char.gender}</span>
        </p>
      </div>
    );
  }
}

export default Character;

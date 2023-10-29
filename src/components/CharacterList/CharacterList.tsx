import "./CharacterList.scss";

import React, { Component } from "react";

import gial from "../../assets/gial.png";
import { ICharacter } from "../../types/interfaces";
import { ICharacterListProps } from "../../types/interfaces";
import Character from "../Character/Charachter";
import Spinner from "../Spinner/Spinner";

class CharacterList extends Component<ICharacterListProps> {
  generateUniqueKey = () => {
    return (
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + 1
    );
  };

  renderCharacters(characters: ICharacter[]) {
    if (characters.length === 0) {
      return (
        <div className="char_list__empty">
          <p>No results found</p>
          <img src={gial} alt="Gial" />
        </div>
      );
    }

    const items = characters.map((char: ICharacter) => {
      return <Character char={char} key={this.generateUniqueKey()} />;
    });
    return <div className="char_list">{items}</div>;
  }

  render() {
    const { characters, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return <div className="main">{this.renderCharacters(characters)}</div>;
  }
}

export default CharacterList;

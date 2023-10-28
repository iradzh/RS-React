
import React, { Component } from "react";

import { ICharacter } from "../../types/interfaces";
import { ICharacterListProps } from "../../types/interfaces";
import Character from "../Character/Charachter";
import Spinner from "../Spinner/Spinner";

class CharacterList extends Component<ICharacterListProps> {
  generateUniqueKey = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  renderCharacters(characters: ICharacter[]) {
    if (characters.length === 0) {
      return <div>No results found.</div>;
    }

    const items = characters.map((char: ICharacter) => {
      return <Character char={char} key={this.generateUniqueKey()} />;
    });
    return <ul>{items}</ul>;
  }

  render() {
    const { characters, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="main__container">{this.renderCharacters(characters)}</div>
    );
  }
}

export default CharacterList;

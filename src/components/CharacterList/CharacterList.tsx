import React, { Component } from 'react';
import { ICharacter } from '../../types/constants';
import Character from '../Character/Charachter';
import Spinner from '../Spinner/Spinner';
import { ICharacterListProps } from '../../types/constants';

class CharacterList extends Component<ICharacterListProps> {
  renderCharacters(characters: ICharacter[]) {
    if (characters.length === 0) {
      return <div>No results found.</div>;
    }

    const items = characters.map((char: ICharacter) => {
      return <Character char={char} key={char.id} />;
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

import './CharacterList.scss';

import React from 'react';

import gial from '../../assets/gial.png';
import { ICharacter, ICharacterListProps } from '../../types/interfaces';
import Character from '../Character/Charachter';
import Spinner from '../Spinner/Spinner';

const CharacterList: React.FC<ICharacterListProps> = (props) => {
  const generateUniqueKey = () => {
    return (
      Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000) + 1
    );
  };

  function renderCharacters(characters: ICharacter[]) {
    if (characters.length === 0) {
      return (
        <div className='char_list__empty'>
          <p>No results found</p>
          <img src={gial} alt='Gial' />
        </div>
      );
    }

    const items = characters.map((char: ICharacter) => {
      return <Character char={char} key={generateUniqueKey()} />;
    });
    return <div className='char_list'>{items}</div>;
  }

  const { characters, loading } = props;

  if (loading) {
    return <Spinner />;
  }

  return <div className='main'>{renderCharacters(characters)}</div>;
};

export default CharacterList;

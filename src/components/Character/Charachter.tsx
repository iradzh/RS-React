import './Character.scss';

import React from 'react';

import { ICharacter } from '../../types/interfaces';

const Character: React.FC<{ char: ICharacter }> = ({ char }) => {
  return (
    <div className='char'>
      <h1 className='char__name'>{char.name}</h1>
      <p className='char__text'>
        Birth year: <span>{char.birth_year}</span>
      </p>
      <p className='char__text'>
        Gender: <span>{char.gender}</span>
      </p>
    </div>
  );
};

export default Character;

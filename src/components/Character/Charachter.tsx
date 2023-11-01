import './Character.scss';

import React from 'react';

import { ICharacter } from '../../types/interfaces';

const Character: React.FC<{ char: ICharacter }> = ({ char }) => {
  return (
    <div className='char'>
      <h1 className='char__name'>{char.name}</h1>
      <p className='char__text'>
        Status: <span>{char.status}</span>
      </p>
      <p className='char__text'>
        Species: <span>{char.species}</span>
      </p>
      <p className='char__text'>
        Gender: <span>{char.gender}</span>
      </p>
    </div>
  );
};

export default Character;

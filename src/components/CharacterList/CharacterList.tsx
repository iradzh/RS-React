import './CharacterList.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import gial from '../../assets/gial.png';
import { ICharacter, ICharacterListProps } from '../../types/interfaces';
import { convertUrltoCharId } from '../../util/constants';
import Character from '../Character/Charachter';

const CharacterList: React.FC<ICharacterListProps> = (
  props: ICharacterListProps
) => {
  const chars = props.loadedData.res.results;
  const perPage = props.loadedData.perPage;

  return (
    <div className='char_list'>
      {chars.length < 1 ? (
        <div className='char_list__empty'>
          <img src={gial} alt='Gial' />
          <p>No data available</p>
        </div>
      ) : (
        chars.slice(0, perPage).map((char: ICharacter, key: number) => (
          <Link
            to={`/${props.page}/details/${convertUrltoCharId(char.url)}`}
            key={key}
          >
            <Character char={char} key={key} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CharacterList;

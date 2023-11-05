import './CharacterList.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { ICharacter, ICharacterListProps } from '../../types/interfaces';
import { convertUrltoCharId } from '../../util/constants';
import Character from '../Character/Charachter';

const CharacterList: React.FC<ICharacterListProps> = (
  props: ICharacterListProps
) => {
  const chars = props.loadedData.res.results;
  const perPage = props.loadedData.perPage;

  return (
    <>
      <div className='char_list'>
        {chars.length < 1 ? (
          <div>No data available.</div>
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
    </>
  );
};

export default CharacterList;

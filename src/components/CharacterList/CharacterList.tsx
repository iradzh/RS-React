import './CharacterList.scss';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import gial from '../../assets/gial.png';
import { AppContext } from '../../context/ContextProvider';
import { ICharacter } from '../../types/interfaces';
import { convertUrltoCharId } from '../../util/constants';
import Character from '../Character/Charachter';

const CharacterList = () => {
  const { search, charList, perPage, pageNum } = useContext(AppContext);

  return (
    <div className='char_list'>
      {charList.length < 1 ? (
        <div className='char_list__empty'>
          <img src={gial} alt='Gial' />
          <p>No data available</p>
        </div>
      ) : (
        charList.slice(0, perPage).map((char: ICharacter, key: number) => (
          <Link
            to={`/${pageNum}?perPage=${perPage}${search}&detailId=${convertUrltoCharId(
              char.url
            )}`}
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

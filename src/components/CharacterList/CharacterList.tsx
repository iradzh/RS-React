import './CharacterList.scss';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import gial from '../../assets/gial.png';
import { useGetCharsQuery } from '../../store/api';
import { ICharacter, IRootState } from '../../types/interfaces';
import { convertUrltoCharId } from '../../util/utilFunctions';
import Character from '../Character/Charachter';

const CharacterList = () => {
  const search = useSelector((state: IRootState) => state.search);
  const perPage = useSelector((state: IRootState) => state.perPage);
  const pageNum = useSelector((state: IRootState) => state.pageNum);

  const url = search
    ? `/?page=${pageNum}&search=${search}`
    : `/?page=${pageNum}`;

  const { data = [] } = useGetCharsQuery(url);

  const charList = data.results;

  return (
    <div className='char_list'>
      {!charList || charList.length < 1 ? (
        <div className='char_list__empty'>
          <img src={gial} alt='Gial' />
          <p>No data available</p>
        </div>
      ) : (
        data.results.slice(0, perPage).map((char: ICharacter, key: number) => (
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

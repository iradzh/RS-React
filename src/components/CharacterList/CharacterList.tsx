import './CharacterList.scss';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CharacterContext } from '../../pages/Home/Home';
import { ICharacter } from '../../types/interfaces';
import { convertUrltoCharId } from '../../util/constants';
import Character from '../Character/Charachter';
import Spinner from '../Spinner/Spinner';

const CharacterList: React.FC = () => {
  const { response, isLoading } = useContext(CharacterContext);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='char_list'>
      {response.results.length < 1 ? (
        <div>No data available.</div>
      ) : (
        response.results.map((data: ICharacter, key: number) => (
          <Link to={`/details/${convertUrltoCharId(data.url)}`} key={key}>
            <Character char={data} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CharacterList;

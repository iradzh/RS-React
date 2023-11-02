import './CharacterList.scss';

import React, { useContext } from 'react';

import { CharacterContext } from '../../pages/Home/Home';
import { ICharacter } from '../../types/interfaces';
import Character from '../Character/Charachter';
import Spinner from '../Spinner/Spinner';

const CharacterList: React.FC = () => {
  const { response, isLoading } = useContext(CharacterContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (!response) {
    return <div>No data available.</div>;
  }

  return (
    <div className='main'>
      <div className='char_list'>
        {response.map((data: ICharacter, key: number) => (
          <Character key={key} char={data} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;

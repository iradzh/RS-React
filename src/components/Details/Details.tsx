import './Details.scss';

import { useLoaderData } from 'react-router-dom';

import { ICharacter } from '../../types/interfaces';
import DetailsSpinner from '../Spinner/DetailsSpinner';
const Details: React.FC = () => {
  const char = useLoaderData() as ICharacter;
  console.log('CHAR: ', char);
  return (
    <div className='details'>
      {!char ? (
        <DetailsSpinner />
      ) : (
        <>
          <h2>{char.name}</h2>
          <p>
            Birth year:
            <span>{char.birth_year}</span>
          </p>
          <p>
            Eye color:
            <span>{char.eye_color}</span>
          </p>
          <p>
            Gender:<span>{char.gender}</span>
          </p>
          <p>
            Hair color:<span>{char.hair_color}</span>
          </p>
          <p>
            Height:<span>{char.height}</span>
          </p>
          <p>
            Mass:<span>{char.mass}</span>
          </p>
          <p>
            Skin color:<span>{char.skin_color}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Details;

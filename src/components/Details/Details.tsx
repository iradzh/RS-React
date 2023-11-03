import './Details.scss';

import { useParams } from 'react-router-dom';

import { loadCharacter } from '../../api/service';
import { convertCharIDtoUrl } from '../../util/constants';
import DetailsSpinner from '../Spinner/DetailsSpinner';

const Details: React.FC = () => {
  const { charID } = useParams();
  const url = convertCharIDtoUrl(Number(charID));

  const { response, isLoading } = loadCharacter(url);
  console.log(isLoading);

  return (
    <div className='details'>
      {isLoading ? (
        <DetailsSpinner />
      ) : (
        <>
          <h2>{response.name}</h2>
          <p>
            Birth year:
            <span>{response.birth_year}</span>
          </p>
          <p>
            Eye color:
            <span>{response.eye_color}</span>
          </p>
          <p>
            Gender:<span>{response.gender}</span>
          </p>
          <p>
            Hair color:<span>{response.hair_color}</span>
          </p>
          <p>
            Height:<span>{response.height}</span>
          </p>
          <p>
            Mass:<span>{response.mass}</span>
          </p>
          <p>
            Skin color:<span>{response.skin_color}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default Details;

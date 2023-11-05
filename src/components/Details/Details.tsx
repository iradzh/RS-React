import './Details.scss';

import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

import { ICharacter } from '../../types/interfaces';

const Details: React.FC = () => {
  const char = useLoaderData() as ICharacter;

  const navigate = useNavigate();
  const location = useLocation();

  const closeDetails = () => {
    if (location.search.indexOf('detailId') > 0) {
      const url = location.search.slice(0, location.search.lastIndexOf('&'));
      navigate(url);
    }
  };

  if (char) {
    return (
      <div className='details'>
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
        <button onClick={closeDetails}>Close</button>
      </div>
    );
  }
};

export default Details;

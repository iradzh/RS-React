import './Details.scss';

import { useLocation, useNavigate } from 'react-router-dom';

import { useGetDetailsQuery } from '../../store/api';

const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const closeDetails = () => {
    if (location.search.indexOf('detailId') > 0) {
      const url = location.search.slice(0, location.search.lastIndexOf('&'));
      navigate(url);
    }
  };

  const id = location.search.slice(location.search.lastIndexOf('=') + 1);

  const { data = [] } = useGetDetailsQuery(id);

  const char = data;

  if (char) {
    return (
      <div className='details' data-testid='details'>
        <h2>Details</h2>

        <h2 data-testid='details-name'>{char.name}</h2>
        <p>
          Birth year:
          <span data-testid='details-birth_year'>{char.birth_year}</span>
        </p>
        <p>
          Eye color:
          <span data-testid='details-eye_color'>{char.eye_color}</span>
        </p>
        <p>
          Gender:<span data-testid='details-gender'>{char.gender}</span>
        </p>
        <p>
          Hair color:
          <span data-testid='details-hair_color'>{char.hair_color}</span>
        </p>
        <p>
          Height:<span data-testid='details-height'>{char.height}</span>
        </p>
        <p>
          Mass:<span data-testid='details-mass'>{char.mass}</span>
        </p>
        <p>
          Skin color:
          <span data-testid='details-skin_color'>{char.skin_color}</span>
        </p>
        <button
          onClick={closeDetails}
          className='details__btn'
          data-testid='details-close'
        >
          Close
        </button>
      </div>
    );
  }
};

export default Details;

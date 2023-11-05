import './Settings.scss';

import { Link } from 'react-router-dom';

import { ICharacterListProps } from '../../types/interfaces';

const Settings: React.FC<ICharacterListProps> = (prop) => {
  let nextPage = '';
  if (prop.response.next) {
    nextPage = `/${prop.page + 1}`;
  }

  let prevPage = '';
  if (prop.response.previous) {
    prevPage = `/${prop.page - 1}`;
  }

  return (
    <div className='settings'>
      <div className='pagination'>
        <Link
          to={prevPage}
          className={prevPage ? 'pagination_active' : 'pagination_disabled'}
        >
          &lt;
        </Link>
        <Link
          to={nextPage}
          className={prevPage ? 'pagination_active' : 'pagination_disabled'}
        >
          &gt;
        </Link>
      </div>
    </div>
  );
};

export default Settings;

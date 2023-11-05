import './Settings.scss';

import { Link } from 'react-router-dom';

import { ICharacterListProps } from '../../types/interfaces';

const Settings: React.FC<ICharacterListProps> = (prop) => {
  const nextUrl = prop.response.next ? new URL(prop.response.next!) : null;
  const prevUrl = prop.response.previous
    ? new URL(prop.response.previous)
    : null;

  const search = nextUrl ? nextUrl.searchParams.get('search') : null;
  const prvPageNr = prevUrl ? prevUrl.searchParams.get('page') : 1;
  const nextPageNr = nextUrl ? nextUrl.searchParams.get('page') : null;

  let nextPage = '';
  if (prop.response.next) {
    nextPage = `/${nextPageNr}`;
  }

  let prevPage = '';
  if (prop.response.previous) {
    prevPage = `/${prvPageNr}`;
  }

  if (search) {
    nextPage = nextPage
      ? nextPage.concat(`&search=${search}`)
      : `?search=${search}`;
    prevPage = prevPage
      ? prevPage.concat(`&search=${search}`)
      : `?search=${search}`;
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
          className={nextPage ? 'pagination_active' : 'pagination_disabled'}
        >
          &gt;
        </Link>
      </div>
    </div>
  );
};

export default Settings;

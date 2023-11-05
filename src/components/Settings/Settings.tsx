import './Settings.scss';

import React, { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ICharacterListProps } from '../../types/interfaces';

const Settings: React.FC<ICharacterListProps> = (prop) => {
  const [perPage, setPerPage] = useState(prop.loadedData.perPage);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPerPage(+e.target.value);
    navigate(`/?perPage=${+e.target.value}`);
  };

  const nextUrl = prop.loadedData.res.next
    ? new URL(prop.loadedData.res.next!)
    : null;
  const prevUrl = prop.loadedData.res.previous
    ? new URL(prop.loadedData.res.previous)
    : null;

  const search = nextUrl ? nextUrl.searchParams.get('search') : null;
  const prvPageNr = prevUrl ? prevUrl.searchParams.get('page') : 1;
  const nextPageNr = nextUrl ? nextUrl.searchParams.get('page') : null;

  let nextPage = '';
  if (prop.loadedData.res.next) {
    nextPage = `/${nextPageNr}?perPage=${perPage}`;
  }

  let prevPage = '';
  if (prop.loadedData.res.previous) {
    prevPage = `/${prvPageNr}?perPage=${perPage}`;
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
      <select
        className='settings__select'
        onChange={handleChange}
        value={perPage}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
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

import './Settings.scss';

import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { useGetCharsQuery } from '../../store/api';
import { updatePageNum } from '../../store/pageNumSlice';
import { updatePerPage } from '../../store/perPageSlice';
import { IRootState } from '../../types/interfaces';

const Settings = () => {
  const navigate = useNavigate();

  const { data = [] } = useGetCharsQuery();

  const search = useSelector((state: IRootState) => state.search);
  const perPage = useSelector((state: IRootState) => state.perPage);
  const pageNum = useSelector((state: IRootState) => state.pageNum);

  const response = data;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updatePerPage(+e.target.value);
    navigate(`/?perPage=${+e.target.value}`);
  };

  const nextUrl = response.next ? new URL(response.next) : null;
  const prevUrl = response.previous ? new URL(response.previous) : null;

  const prvPageNr = prevUrl ? prevUrl.searchParams.get('page') : 1;
  const nextPageNr = nextUrl ? nextUrl.searchParams.get('page') : null;

  let nextPage = '';
  if (response.next) {
    nextPage = `/${nextPageNr}?perPage=${perPage}`;
  }

  let prevPage = '';
  if (response.previous) {
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

  updatePageNum(nextPageNr ? +nextPageNr - 1 : 1);

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
          className={prevUrl ? 'pagination__active' : 'pagination_disabled'}
          data-testid='prevPageBtn'
        >
          &lt;
        </Link>
        <span className='pagination__current'>{pageNum}</span>
        <Link
          to={nextPage}
          className={nextUrl ? 'pagination__active' : 'pagination_disabled'}
          data-testid='nextPageBtn'
        >
          &gt;
        </Link>
      </div>
    </div>
  );
};

export default Settings;

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import Spinner from '../../components/Spinner/Spinner';
import { IRootState } from '../../types/interfaces';

export const Page = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseDetails = () => {
    if (location.search.indexOf('detailId') > 0) {
      const url = location.search.slice(0, location.search.lastIndexOf('&'));
      navigate(url);
    }
  };

  const isMainLoading = useSelector((state: IRootState) => state.isMainLoading);
  const isDetailsLoading = useSelector(
    (state: IRootState) => state.isDetailsLoading
  );

  if (isMainLoading || isDetailsLoading) {
    return <Spinner />;
  } else {
    return (
      <div className='page' onClick={handleCloseDetails}>
        <SearchBar />
        <Settings />
        <CharacterList />
      </div>
    );
  }
};

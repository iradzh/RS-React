import { useContext } from 'react';
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useNavigation,
} from 'react-router-dom';

import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import Spinner from '../../components/Spinner/Spinner';
import { AppContext } from '../../context/ContextProvider';
import { ILoadedData } from '../../types/interfaces';

export const Page = () => {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const loadedData = useLoaderData() as ILoadedData;

  const { updateCharList, updateResponse } = useContext(AppContext);
  updateCharList(loadedData);
  updateResponse(loadedData);

  const handleCloseDetails = () => {
    if (location.search.indexOf('detailId') > 0) {
      const url = location.search.slice(0, location.search.lastIndexOf('&'));
      navigate(url);
    }
  };

  if (state !== 'idle') {
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

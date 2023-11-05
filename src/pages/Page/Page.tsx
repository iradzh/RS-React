import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import Spinner from '../../components/Spinner/Spinner';
import { ILoadedData } from '../../types/interfaces';

export const Page = () => {
  const { page } = useParams();
  const loadedData = useLoaderData() as ILoadedData;

  const { state } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseDetails = () => {
    console.log(location);

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
        <SearchBar loadedData={loadedData} page={page ? +page : 1} />
        <Settings loadedData={loadedData} page={page ? +page : 1} />
        <CharacterList loadedData={loadedData} page={page ? +page : 1} />
      </div>
    );
  }
};

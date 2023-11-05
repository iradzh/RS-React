import { useLoaderData, useParams } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';

import { ILoadedData } from '../../api/service';
import CharacterList from '../../components/CharacterList/CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import Settings from '../../components/Settings/Settings';
import Spinner from '../../components/Spinner/Spinner';

export const Page = () => {
  const { page } = useParams();
  const loadedData = useLoaderData() as ILoadedData;

  console.log('LOADED', loadedData);

  const { state } = useNavigation();

  if (state !== 'idle') {
    return <Spinner />;
  } else {
    return (
      <>
        <SearchBar loadedData={loadedData} page={page ? +page : 1} />
        <CharacterList loadedData={loadedData} page={page ? +page : 1} />
        <Settings loadedData={loadedData} page={page ? +page : 1} />
      </>
    );
  }
};

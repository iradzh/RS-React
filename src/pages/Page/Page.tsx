import { useLoaderData, useParams } from 'react-router-dom';

import CharacterList from '../../components/CharacterList/CharacterList';
import { IApiResponse } from '../../types/interfaces';

export const Page = () => {
  const { page } = useParams();
  const response = useLoaderData() as IApiResponse;
  console.log('PAGE ', page);

  return <CharacterList response={response} page={page ? +page : 1} />;
};

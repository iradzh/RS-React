import { useSearchParams } from 'react-router-dom';

import Details from '../components/Details/Details';

const DetailsLayout = () => {
  const [searchParams] = useSearchParams();

  const detailId = searchParams.get('detailId');

  if (detailId) {
    return (
      <div className='details-layout'>
        <Details />
      </div>
    );
  } else return;
};

export default DetailsLayout;

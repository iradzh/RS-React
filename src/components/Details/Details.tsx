import './Details.scss';

import { useParams } from 'react-router-dom';

import { loadData } from '../../api/service';
import { convertCharIDtoUrl } from '../../util/constants';

const Details: React.FC = () => {
  const { charID } = useParams();
  const url = convertCharIDtoUrl(Number(charID));

  const { response } = loadData(url);
  console.log(response);

  return (
    <div className='details'>
      <h1>DETAILS</h1>
    </div>
  );
};

export default Details;

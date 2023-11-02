import './NotFoundPage.scss';

import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className='not_found'>
      <h1>
        Error 404: The Force is not with this page. <br />
        Embrace the dark side, and lets find another way.
      </h1>

      <p>
        Go to the <Link to='/'>Home</Link>
      </p>
    </div>
  );
};

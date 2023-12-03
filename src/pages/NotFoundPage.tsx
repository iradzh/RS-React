import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="notfound">
      Wrong link, here is correct to go <Link to="/">home</Link>
    </div>
  );
};

export default NotFoundPage;

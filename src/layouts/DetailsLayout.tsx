import { Outlet } from 'react-router-dom';

const DetailsLayout = () => {
  return (
    <div className='details-layout'>
      <Outlet />
    </div>
  );
};

export default DetailsLayout;

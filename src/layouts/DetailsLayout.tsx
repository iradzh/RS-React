import Details from '../components/Details/Details';
const DetailsLayout = () => {
  return (
    <div className='details-layout'>
      {/* <div className='home-page'>
        <Outlet />
      </div> */}
      <div className='details-page'>
        <Details />
      </div>
    </div>
  );
};

export default DetailsLayout;

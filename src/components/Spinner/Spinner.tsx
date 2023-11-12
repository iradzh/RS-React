import './Spinner.scss';

import luke from '../../assets/luke.png';

const Spinner: React.FC = () => {
  return (
    <div className='spinner__wrapper'>
      <div className='spinner__element' />
      <div className='spinner__message'>
        <p>
          The Force will guide us through this delay caused by a sluggish API
        </p>
        <img alt='Luke' src={luke} />
      </div>
    </div>
  );
};

export default Spinner;

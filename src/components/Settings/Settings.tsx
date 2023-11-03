import './Settings.scss';

import { useContext } from 'react';

import { CharacterContext } from '../../pages/Home/Home';

const Settings: React.FC = () => {
  const { response, isLoading, fetchData } = useContext(CharacterContext);

  const handleNextPage = () => {
    if (response.next) {
      fetchData(response.next);
    }
  };

  const handlePrevPage = () => {
    if (response.previous) {
      fetchData(response.previous);
    }
  };

  return (
    <div className='settings'>
      {!isLoading && (
        <div className='pagination'>
          <button onClick={handlePrevPage} disabled={!response.previous}>
            &lt;
          </button>
          <button onClick={handleNextPage} disabled={!response.next}>
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Settings;

import './ErrorTrigger.scss';

import { useState } from 'react';

import { IErrorTriggerProps } from '../../types/interfaces';

const ErrorTriggerButton: React.FC<IErrorTriggerProps> = () => {
  const [errorState, setErrorState] = useState(false);

  const handleClick = () => {
    setErrorState(true);
  };

  if (errorState) {
    throw new Error('Error demonstration');
  }

  return (
    <div className='error_trigger'>
      <button
        className='searchbar__btn error_trigger__btn'
        onClick={handleClick}
      >
        throw error
      </button>
    </div>
  );
};

export default ErrorTriggerButton;

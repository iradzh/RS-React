import './Setting.scss';

import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className='settings'>
      <h1>Settings</h1>
      <form>
        <label htmlFor='perPage'>Items per page</label>
        <input
          type='number'
          id='perPage'
          name='perPage'
          min={1}
          max={10}
          className='settings_perPage_input'
        />
      </form>
    </div>
  );
};

export default Settings;

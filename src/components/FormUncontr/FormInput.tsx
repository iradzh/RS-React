import React from 'react';
import { IUncInputProps } from '../../interfaces';

const FormInput = (props: IUncInputProps) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  console.log('HERE', errorMessage);
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} />
      <p>{errorMessage}</p>
    </div>
  );
};

export default FormInput;

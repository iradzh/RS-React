import React, { ChangeEvent, FormEvent, useState } from 'react';
import FormInput from './FormInput';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUncontrData } from '../../store/slicers/uncontrFormSlice';
import { TableForm } from '../../interfaces';
import '../Form.scss';
import { schema } from '../../schema';

const FormUncontr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      label: 'name',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      label: 'Email',
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      schema.validateSync(values, { abortEarly: false });
      dispatch(
        setUncontrData({
          name: values.name,
          email: values.email,
          // age: values.age,
          // gender: values.gender,
          // tc: values.tc,
        })
      );
      navigate('/');
    } catch (validationError) {
      console.error('Form validation errors:', validationError);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>{TableForm.UNC}</h1>
      {inputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={values[input.name]}
          onChange={onChange}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUncontr;

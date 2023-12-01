import React from 'react';

import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFormValues, TableForm } from '../../interfaces';

import { schema } from '../../schema';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUseFormData } from '../../store/slicers/useFormDataSlice';

const FormWithHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormValues) => {
    dispatch(
      setUseFormData({
        name: data.name,
        email: data.email,
        age: data.age,
        gender: data.gender,
        tc: data.tc,
      })
    );
    navigate('/');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <h1>{TableForm.HOOK}</h1>

        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name')}
            onChange={() => {
              trigger('name');
            }}
          />

          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register('age')}
            onChange={() => {
              trigger('age');
            }}
          />
          {errors.age && <p className="error-message">{errors.age.message}</p>}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            onChange={() => {
              trigger('email');
            }}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            onChange={() => {
              trigger('password');
            }}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="gender">
          <label htmlFor="she">Female</label>
          <input
            type="radio"
            id="she"
            {...register('gender', { required: true })}
          />
        </div>

        <div className="gender">
          <label htmlFor="he">Male</label>
          <input
            type="radio"
            id="he"
            {...register('gender', { required: true })}
          />
        </div>

        <div className="gender">
          <label htmlFor="they">Prefer not to say</label>
          <input
            type="radio"
            id="they"
            {...register('gender', { required: true })}
          />
        </div>
        {errors.gender && (
          <p className="error-message">{errors.gender.message}</p>
        )}
        <div className="col-2">
          <label htmlFor="tc">I accept T&C</label>
          <input type="checkbox" id="tc" {...register('tc')} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default FormWithHook;

import React from 'react';

import { Resolver, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFormValues } from '../../interfaces';

import { schema } from '../../schema';

const FormWithHook = () => {
  const form = useForm<IFormValues>({
    defaultValues: {
      name: '',
    },
    resolver: yupResolver(schema) as Resolver<IFormValues>,
  });

  const { register, control, handleSubmit, formState, trigger } = form;
  const { errors } = formState;

  const onSubmit = (data: IFormValues) => {
    console.log('submitted', data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form" noValidate>
        <h1>React Hook Form</h1>

        <div className="col-2">
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
            {errors.age && (
              <p className="error-message">{errors.age.message}</p>
            )}
          </div>
        </div>

        <div className="col-2">
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
        <div className="col-2">
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
        </div>
        <div className="col-2">
          <label htmlFor="tc">I accept T&C</label>
          <input type="checkbox" id="tc" />
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export default FormWithHook;

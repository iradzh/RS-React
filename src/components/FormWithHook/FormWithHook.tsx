import { useForm, SubmitHandler, Resolver } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setHookData } from '../../store/slicers/hookDataSlice';
import { IFormValues, TableForm } from '../../interfaces';
import { schema } from '../../util/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import '../Form.scss';
import { toBase64 } from '../../util/base64';

const FormWithHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resolver: Resolver<IFormValues> = yupResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    resolver,
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    dispatch(
      setHookData({
        isInitialised: true,
        name: data.name,
        age: data.age,
        email: data.email,
        password: data.password,
        passwordConfirmed: data.passwordConfirmed,
        gender: data.gender,
        pic: await toBase64(data.pic![0]),
        tc: data.tc,
      })
    );
    reset();
    navigate('/');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form"
        noValidate
        autoComplete="on"
      >
        <h1>{TableForm.HOOK}</h1>

        <div className="input_wrapper">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name')}
            autoComplete="name"
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}
        </div>

        <div className="input_wrapper">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register('age')}
            autoComplete="age"
          />
          {errors.age && <p className="error-message">{errors.age.message}</p>}
        </div>

        <div className="input_wrapper">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="input_wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password')}
            autoComplete="off"
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="input_wrapper">
          <label htmlFor="passwordConfirmed">Confirm password</label>
          <input
            type="password"
            id="passwordConfirmed"
            {...register('passwordConfirmed')}
            autoComplete="off"
          />
          {errors.passwordConfirmed && (
            <p className="error-message">{errors.passwordConfirmed.message}</p>
          )}
        </div>

        <div className="gender__wrapper">
          <div className="gender">
            <label htmlFor="she">Female</label>
            <input type="radio" id="she" {...register('gender')} value="she" />
          </div>

          <div className="gender">
            <label htmlFor="he">Male</label>
            <input type="radio" id="he" {...register('gender')} value="he" />
          </div>

          <div className="gender">
            <label htmlFor="they">Prefer not to say</label>
            <input
              type="radio"
              id="they"
              {...register('gender')}
              value="they"
            />
          </div>
        </div>
        {errors.gender && (
          <p className="error-message">{errors.gender.message}</p>
        )}

        <div className="attach">
          <label htmlFor="pic" className="custom-file-upload">
            Attach image
          </label>
          <input id="pic" type="file" {...register('pic')} />
        </div>
        {errors.pic && <p className="error-message">{errors.pic.message}</p>}

        <div className="tc">
          <label htmlFor="tc">I accept Terms and Conditions</label>
          <input type="checkbox" id="tc" {...register('tc')} />
        </div>
        {errors.tc && <p className="error-message">{errors.tc.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormWithHook;

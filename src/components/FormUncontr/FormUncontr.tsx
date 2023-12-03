import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUncontrData } from '../../store/slicers/uncontrFormSlice';
import { TableForm } from '../../interfaces';
import '../Form.scss';
import { schema } from '../../schema';

type FormErrors = {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
  passwordConfirmed?: string;
  gender?: string;
  tc?: string | boolean;
};

interface ValidationError {
  path: string;
  message: string;
}

const FormUncontr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    passwordConfirmed: '',
    gender: '',
    tc: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    passwordConfirmed: '',
    gender: '',
    tc: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        dispatch(setUncontrData(formData));
        navigate('/');
      })
      .catch((validationErrors) => {
        console.error(validationErrors);
        const newErrors: FormErrors = {};
        validationErrors.inner.forEach((error: ValidationError) => {
          const key = error.path as keyof FormErrors;
          newErrors[key] = error.message;
        });
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          ...newErrors,
          tc: newErrors.tc as boolean,
        }));
      });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>{TableForm.UNC}</h1>

      <div className="input_wrapper">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="error-message">{formErrors.name}</p>}
      </div>

      <div className="input_wrapper">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {formErrors.age && <p className="error-message">{formErrors.age}</p>}
      </div>

      <div className="input_wrapper">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && (
          <p className="error-message">{formErrors.email}</p>
        )}
      </div>

      <div className="input_wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formErrors.password && (
          <p className="error-message">{formErrors.password}</p>
        )}
      </div>

      <div className="input_wrapper">
        <label htmlFor="passwordConfirmed">Confirm password</label>
        <input
          type="password"
          id="passwordConfirmed"
          name="passwordConfirmed"
          value={formData.passwordConfirmed}
          onChange={handleChange}
        />
        {formErrors.passwordConfirmed && (
          <p className="error-message">{formErrors.passwordConfirmed}</p>
        )}
      </div>

      <div className="gender__wrapper">
        <div className="gender">
          <label htmlFor="she">Female</label>
          <input
            type="radio"
            id="she"
            name="gender"
            value="she"
            checked={formData.gender === 'she'}
            onChange={handleChange}
          />
        </div>

        <div className="gender">
          <label htmlFor="he">Male</label>
          <input
            type="radio"
            id="he"
            name="gender"
            value="he"
            checked={formData.gender === 'he'}
            onChange={handleChange}
          />
        </div>

        <div className="gender">
          <label htmlFor="they">Prefer not to say</label>
          <input
            type="radio"
            id="they"
            name="gender"
            value="they"
            checked={formData.gender === 'they'}
            onChange={handleChange}
          />
        </div>
      </div>

      {formErrors.gender && (
        <p className="error-message">{formErrors.gender}</p>
      )}

      <div className="attach">
        <label htmlFor="pic" className="custom-file-upload">
          Attach image
        </label>
        <input id="pic" type="file" />
      </div>

      <div className="tc">
        <label htmlFor="tc">I accept Terms and Conditions</label>
        <input type="checkbox" id="tc" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormUncontr;

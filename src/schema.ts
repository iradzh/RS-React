import * as yup from 'yup';
import { IFormValues } from './interfaces';

export const schema: yup.ObjectSchema<IFormValues> = yup.object({
  name: yup
    .string()
    .test(
      'capitalizeFirstLetter',
      'First letter must be capitalized',
      (value) => {
        console.log('nameVal', value);
        if (!value) {
          return false;
        }

        console.log('name', value[0] === value[0].toUpperCase());
        return value[0] === value[0].toUpperCase();
      }
    )
    .required(),

  age: yup.number().positive().integer().required('Age is required!'),

  email: yup.string().email().required('Email is required!'),

  password: yup
    .string()
    .min(4, 'Password should be at least 4 characters')
    .max(20)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{4,}$/,
      'Should contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    )
    .required('Password is required!'),

  gender: yup
    .string()
    .oneOf(['she', 'he', 'they'], 'Please select a gender')
    .required('Gender is required'),

  tc: yup.boolean().required(),
});

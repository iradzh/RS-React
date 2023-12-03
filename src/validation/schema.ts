import * as yup from 'yup';
import { IFormValues } from '../interfaces';

export const schema: yup.ObjectSchema<IFormValues> = yup.object({
  name: yup
    .string()
    .test(
      'capitalizeFirstLetter',
      'First letter must be capitalized',
      (value) => {
        if (!value) {
          return false;
        }

        return value[0] === value[0].toUpperCase();
      }
    )
    .required(),

  age: yup.number().positive().integer().required('Age is required!'),

  email: yup.string().email().required('Email is required!'),

  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{4,}$/,
      'Password should contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    )
    .required('Password is required!'),

  passwordConfirmed: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords should match!')
    .required('Password confirmation is required!'),

  gender: yup
    .string()
    .oneOf(['she', 'he', 'they'], 'Please select a gender')
    .required('Gender is required'),

  pic: yup
    .mixed<FileList>()
    .test(
      'fileType',
      'Invalid file type. Only PNG or JPEG allowed.',
      (value) => {
        if (value && value[0]) {
          const file = value![0];

          return (
            value && (file.type === 'image/png' || file.type === 'image/jpeg')
          );
        }
      }
    )
    .test('fileSize', 'File size too large. Maximum size is 10MB.', (value) => {
      if (value && value[0]) {
        const file = value![0];
        return value && file.size <= 10485760;
      }
    }),

  tc: yup.boolean().required(),
});

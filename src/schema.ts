import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .test(
      'capitalizeFirstLetter',
      'First letter must be capitalized',
      (value) => {
        if (!value) return false;
        return value[0] === value[0].toUpperCase();
      }
    ),

  age: yup.number().test('positive', 'Age must be positive', (value) => {
    if (value! < 0) return false;
  }),

  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      'Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character'
    ),
});

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

  age: yup.number().positive().integer(),

  email: yup.string().email().required(),

  password: yup.string().email().required(),

  gender: yup.string().required(),

  tc: yup.boolean().required(),
});

import * as yup from 'yup';

export const storeUserSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string(),
});

export const updateUserSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string(),
});

import { string } from 'yup';

export const searchValidator = string()
  .trim()
  .min(3, 'Enter 3 letters or more!');

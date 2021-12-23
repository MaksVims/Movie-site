import { LoginFormValues, LoginValidationErrors } from 'types';
import { validationErrors } from '@/const/validationErrors';
import { regexpForEmail } from '@/const/regexp';

export const validateLoginForm = (
  { email, password }: LoginFormValues,
): LoginValidationErrors => {
  const errors: LoginValidationErrors = {}

  if (!email.length) {
    errors.email = validationErrors.required
  } else if (!regexpForEmail.test(email)) {
    errors.email = validationErrors.noValidEmail
  }

  if (!password.length) {
    errors.password = validationErrors.required
  }

  return errors
}

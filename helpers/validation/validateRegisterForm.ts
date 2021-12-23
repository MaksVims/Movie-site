import { RegisterFormValues, RegisterValidationErrors } from 'types';
import { validationErrors } from '@/const/validationErrors';
import { regexpForEmail } from '@/const/regexp';

export const validateRegisterForm = ({
  email,
  password,
  repeating,
  isAgree,
}: RegisterFormValues): RegisterValidationErrors => {
  const errors: RegisterValidationErrors = {}

  if (!email.length) {
    errors.email = validationErrors.required
  } else if (!regexpForEmail.test(email)) {
    errors.email = validationErrors.noValidEmail
  }

  if (!password.length) {
    errors.password = validationErrors.required
  } else if (password.length < 6) {
    errors.password = validationErrors.minLength(6)
  }

  if (!repeating.length || repeating !== password) {
    errors.repeating = validationErrors.noEqualPasswords
  }

  if (!isAgree) {
    errors.isAgree = validationErrors.disAgree
  }

  return errors
}

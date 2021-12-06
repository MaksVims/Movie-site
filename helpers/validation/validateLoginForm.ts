import {LoginFormValues, LoginValidationErrors} from "#/validationTypes";
import {validationErrors} from "@/const/validationErrors";
import {regexpForEmail} from "@/const/regexp";

export const validateLoginForm = function ({email, password}: LoginFormValues): LoginValidationErrors {
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
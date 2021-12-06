import React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import {Form, Formik} from "formik";
import {validationErrors} from "@/const/validationErrors";
import FormInput from "@/components/ui/FormInput";
import FormCheckbox from "@/components/ui/FormCheckbox";

type RegisterValidationErrors = {
  email?: string,
  username?: string,
  password?: string,
  repeating?: string,
  isAgree?: string
}

const regexpForEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

const validation = function ({email, password, repeating, isAgree}: RegisterFormValues): RegisterValidationErrors {
  const errors: RegisterValidationErrors = {}

  if (!email.length) {
    errors.email = validationErrors.required
  } else if (!regexpForEmail.test(email)) {
    errors.email = validationErrors.noValidEmail
  }

  if (!password.length) {
    errors.password = validationErrors.required
  } else if (password.length < 4) {
    errors.password = validationErrors.minLength(4)
  }

  if (!repeating.length || repeating !== password) {
    errors.repeating = validationErrors.noEqualPasswords
  }

  if (!isAgree) {
    errors.isAgree = validationErrors.disAgree
  }

  return errors
}

type RegisterFormValues = {
  email: string,
  username: string,
  password: string,
  repeating: string,
  isAgree: false
}

const Register: NextPage = () => {
  return (
    <div className="bg-black">
      <main className="flex items-center justify-center px-4 py-6 bg-auth bg-no-repeat bg-top">
        <section className="h mx-auto max-w-2xl w-full bg-white py-6 px-4 rounded-md shadow-md">
          <div className="space-y-20">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Регистрация аккаунта</h1>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <span className="text_gray_color">Уже есть аккаунт?</span>
                <Link href="/auth/login">
                  <a className="link_blur_color">Войти</a>
                </Link>
              </div>
            </div>

            <Formik
              initialValues={{
                email: '',
                username: '',
                password: '',
                repeating: '',
                isAgree: false
              }}
              validate={validation}
              onSubmit={values => {
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <Form className="flex flex-col">
                <FormInput label="Email:" name="email" type="email" required/>
                <FormInput label="Логин:" name="username" type="text"/>
                <FormInput label="Пароль:" name="password" type="password" required/>
                <FormInput className="mb-6" label="Повтор:" name="repeating" type="password" required/>
                <FormCheckbox
                  label="Я принимаю условие пользовательского соглашения"
                  name="isAgree"
                  className="pb-3"
                />
                <button
                  className="mt-2 btn-submit"
                  type="submit"
                >
                  Регистрация
                </button>
              </Form>
            </Formik>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
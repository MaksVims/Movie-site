import React from 'react';
import {NextPage} from "next";
import Link from 'next/link'
import {Form, Formik} from "formik";
import FormInput from "@/components/ui/FormInput";
import {validationErrors} from "@/const/validationErrors";

type LoginValidationErrors = {
  email?: string,
  password?: string,
}

const regexpForEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

const validation = function ({email, password}: LoginFormValues): LoginValidationErrors {
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

type LoginFormValues = {
  email: string,
  password: string,
}

const Login: NextPage = () => {
  return (
    <div className="bg-black">
      <main className="flex items-center justify-center px-4 py-6 bg-auth bg-no-repeat bg-top">
        <section className="h mx-auto max-w-2xl w-full bg-white py-6 px-4 rounded-md shadow-md">
          <div className="space-y-20">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Авторизация</h1>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <span className="text_gray_color">Нет аккаунта?</span>
                <Link href="/auth/register">
                  <a className="link_blur_color">Зарегистрироваться</a>
                </Link>
              </div>
            </div>

            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validate={validation}
              onSubmit={values => {
                alert(JSON.stringify(values, null, 2))
              }}
            >
              <Form className="flex flex-col">
                <FormInput label="Email:" name="email" type="email" required/>
                <FormInput label="Пароль:" name="password" type="password" required/>
                <button
                  className="mt-2 btn-submit"
                  type="submit"
                >
                  Войти на сайт
                </button>
              </Form>
            </Formik>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
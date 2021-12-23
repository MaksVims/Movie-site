import React, { FC, useEffect, useRef } from 'react';
import { Form, Formik } from 'formik';
import { RegisterFormValues } from 'types';
import { validateRegisterForm } from 'helpers';
import { FormCheckbox, FormInput } from '@/components/ui';

interface IRegisterForm {
  submitHandler: (values: RegisterFormValues) => Promise<void> | void
}

const FormRegister: FC<IRegisterForm> = ({ submitHandler }) => {
  const focusRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    focusRef.current?.focus()
  }, [])

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
        repeating: '',
        isAgree: false,
      }}
      validate={validateRegisterForm}
      onSubmit={submitHandler}
    >
      {({ isValid, dirty }) => (
        <Form className="flex flex-col">
          <FormInput
            placeholder="Укажите Email"
            label="Email:"
            name="email"
            type="email"
            ref={focusRef}
            required
          />
          <FormInput
            placeholder="Ваше имя или логин"
            label="Логин:"
            name="username"
            type="text"
          />
          <FormInput
            placeholder="Пароль"
            label="Пароль:"
            name="password"
            type="password"
            autoComplete="off"
            required
          />
          <FormInput
            placeholder="Повторите пароль"
            className="mb-6"
            label="Повтор:"
            name="repeating"
            type="password"
            autoComplete="off"
            required
          />
          <FormCheckbox
            label="Я принимаю условие пользовательского соглашения"
            name="isAgree"
            className="pb-3"
          />
          <button
            disabled={!dirty || !isValid}
            className="mt-2 btn-submit"
            type="submit"
          >
            Регистрация
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;

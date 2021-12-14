import React, {FC, useEffect, useRef} from 'react';
import {Form, Formik} from "formik";
import {validateLoginForm} from "+/validation";
import FormInput from "@/components/ui/FormInput";
import {LoginFormValues} from "#/validationTypes";

interface ILoginForm {
  handlerSubmit: (values: LoginFormValues) => Promise<void> | void
}

const FormLogin: FC<ILoginForm> = ({handlerSubmit}) => {
  const focusRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    focusRef.current?.focus()
  }, [])

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={validateLoginForm}
      onSubmit={handlerSubmit}
    >
      {({isValid, dirty}) => (
        <Form className="flex flex-col">
          <FormInput
            placeholder="Введите свой email"
            label="Email:"
            name="email"
            type="email"
            ref={focusRef}
            required
          />
          <FormInput
            placeholder="Укажите пароль при регистрации"
            label="Пароль:"
            name="password"
            type="password"
            autoComplete='off'
            required
          />
          <button
            disabled={!dirty || !isValid}
            className="mt-2 btn-submit"
            type="submit"
          >
            Войти на сайт
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
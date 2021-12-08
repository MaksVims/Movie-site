import React, {FC} from 'react';
import {Form, Formik} from "formik";
import {validateLoginForm} from "+/validation";
import FormInput from "@/components/ui/FormInput";
import {LoginFormValues} from "#/validationTypes";

interface ILoginForm {
  handlerSubmit: (values: LoginFormValues) => Promise<void> | void
}

const LoginForm: FC<ILoginForm> = ({handlerSubmit}) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={validateLoginForm}
      onSubmit={handlerSubmit}
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
  );
};

export default LoginForm;
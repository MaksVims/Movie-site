import React, {FC} from 'react';
import {Form, Formik} from "formik";
import {validateLoginForm} from "+/validation";
import FormInput from "@/components/ui/FormInput";

const LoginForm: FC = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={validateLoginForm}
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
  );
};

export default LoginForm;
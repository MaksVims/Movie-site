import React, {FC} from 'react';
import {Form, Formik} from "formik";
import {validateRegisterForm} from "+/validation";
import FormInput from "@/components/ui/FormInput";
import FormCheckbox from "@/components/ui/FormCheckbox";

const RegisterForm:FC = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        password: '',
        repeating: '',
        isAgree: false
      }}
      validate={validateRegisterForm}
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
  );
};

export default RegisterForm;
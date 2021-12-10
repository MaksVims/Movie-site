import React, {FC} from 'react';
import {useAuth} from "@/contexts/AuthContext";
import {Form, Formik} from "formik";
import FormInput from "@/components/ui/FormInput";
import {EditUserDataFormValues} from "#/validationTypes";
import {validateEditUserDataForm} from '+/validation/validateEditUserDataForm';

interface FormEditUserDataProps {
  submitHandler: (values: EditUserDataFormValues) => Promise<void> | void
}

const FormEditUserData: FC<FormEditUserDataProps> = ({submitHandler}) => {
  const {user} = useAuth()

  return (
    <Formik
      initialValues={{
        username: `${user?.displayName || ''}`,
        tel: `${user?.phoneNumber || ''}`,
        url: `${user?.photoURL || ''}`,
      }}
      validate={validateEditUserDataForm}
      onSubmit={submitHandler}
    >
      <Form className="flex flex-col">
        <FormInput
          label="Имя:"
          name="username"
          type="text"/>
        <FormInput
          label="Контактный телефон:"
          name="tel"
          type="tel"/>
        <FormInput
          label="Ссылка на аватарку:"
          name="url"
          type="url"/>
        <button
          className="mt-2 btn-submit"
          type="submit"
        >
          Сохранить
        </button>
      </Form>
    </Formik>
  );
};

export default FormEditUserData;
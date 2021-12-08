import React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import {RegisterFormValues} from "#/validationTypes";
import FirebaseAuthService from "@/api/FirebaseAuthService";
import FormLoader from "@/components/ui/FormLoader";
import {useFetch} from "@/hooks/useFetch";

const Register: NextPage = () => {

  const [register, loading, error] = useFetch(async (values: RegisterFormValues) => {
    const {password, email, username} = values
    await FirebaseAuthService.register(email, password, username || '')
  })

  return (
    <div className="bg-black">
      <main className="flex items-center justify-center px-4 py-6 bg-auth bg-no-repeat bg-top">
        <section className="mx-auto max-w-2xl w-full bg-white rounded-md shadow-md relative">
          <div className="space-y-12 sm:space-y-20 py-6 px-4 ">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Регистрация аккаунта</h1>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <span className="text_gray_color">Уже есть аккаунт?</span>
                <Link href="/auth/login">
                  <a className="link_blur_color">Войти</a>
                </Link>
              </div>
            </div>
            <RegisterForm submitHandler={register}/>
          </div>
          {loading && <FormLoader/>}
        </section>
      </main>
    </div>
  );
};

export default Register;
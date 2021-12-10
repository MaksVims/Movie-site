import React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";
import {RegisterFormValues} from "#/validationTypes";
import FirebaseAuthService from "@/api/FirebaseAuthService";
import BoxLoader from "@/components/ui/BoxLoader";
import {useFetch} from "@/hooks/useFetch";

const Register: NextPage = () => {

  const [register, loading, error] = useFetch(async (values: RegisterFormValues) => {
    const {password, email, username} = values
    await FirebaseAuthService.register(email, password, username || '')
  })

  return (
    <div className="bg-black">
      <main className="flex-center px-4 py-6 bg-auth bg-no-repeat bg-top min-screen">
        <section className="mx-auto max-w-2xl w-full bg-white rounded-md shadow-md relative">
          <div className="space-y-12 sm:space-y-20 py-6 px-4 ">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Регистрация аккаунта</h1>
              <div className="flex-center space-x-1 text-sm">
                <span className="text-gray-color">Уже есть аккаунт?</span>
                <Link href="/auth/login">
                  <a className="link-blur-color">Войти</a>
                </Link>
              </div>
            </div>
            <RegisterForm submitHandler={register}/>
          </div>
          {loading && <BoxLoader/>}
        </section>
      </main>
    </div>
  );
};

export default Register;
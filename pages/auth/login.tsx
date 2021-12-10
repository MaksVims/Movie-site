import React, {useCallback} from 'react';
import {NextPage} from "next";
import Link from 'next/link'
import LoginForm from "@/components/auth/LoginForm";
import {LoginFormValues} from "#/validationTypes";
import FirebaseAuthService from "@/api/FirebaseAuthService";
import BoxLoader from "@/components/ui/BoxLoader";
import {useFetch} from "@/hooks/useFetch";

const Login: NextPage = () => {
  const [login, loading, error] = useFetch(useCallback(async (values: LoginFormValues) => {
    const {email, password} = values
    await FirebaseAuthService.login(email, password)
  }, []))

  return (
    <div className="bg-black">
      <main className="flex-center min-screen px-4 py-6 bg-auth bg-no-repeat bg-top">
        <section className="mx-auto max-w-2xl w-full bg-white rounded-md shadow-md relative">
          <div className="space-y-12 sm:space-y-20 py-6 px-4">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Авторизация</h1>
              <div className="flex-center space-x-1 text-sm">
                <span className="text-gray-color">Нет аккаунта?</span>
                <Link href="/auth/register">
                  <a className="link-blur-color">Зарегистрироваться</a>
                </Link>
              </div>
            </div>
            <LoginForm handlerSubmit={login}/>
          </div>
          {loading && <BoxLoader/>}
        </section>
      </main>
    </div>
  );
};

export default Login;
import React from 'react';
import {NextPage} from "next";
import Link from 'next/link'
import LoginForm from "@/components/auth/LoginForm";

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
          <LoginForm />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
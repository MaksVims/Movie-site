import React from 'react';
import {NextPage} from "next";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <div className="bg-black">
      <main className="flex items-center justify-center px-4 py-6 bg-auth bg-no-repeat bg-top">
        <section className="h mx-auto max-w-2xl w-full bg-white py-6 px-4 rounded-md shadow-md">
          <div className="space-y-20">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Регистрация аккаунта</h1>
              <div className="flex items-center justify-center space-x-1 text-sm">
                <span className="text_gray_color">Уже есть аккаунт?</span>
                <Link href="/auth/login">
                  <a className="link_blur_color">Войти</a>
                </Link>
              </div>
            </div>

            <form className="flex flex-col">
              <div className="mb-3 relative pb-3 space-y-1">
                <label className="block font-medium text-lg">Email: <span className="text-red-400">*</span></label>
                <input
                  className="border border-solid border-gray-400 block w-full py-2 px-2 rounded-md focus:outline-none focus:border-primary-light shadow-md"
                  type="email"
                  placeholder="Укажите email"/>
                <span className="text-red-400 text-xs absolute">Укажите корректный email</span>
              </div>
              <div className="mb-3 relative pb-3 space-y-1">
                <label className="block font-medium text-lg">Логин:</label>
                <input
                  className="border border-solid border-gray-400 block w-full py-2 px-2 rounded-md focus:outline-none focus:border-primary-light shadow-md"
                  type="text"
                  placeholder="Укажите никнейм"/>
                <span className="text-red-400 text-xs absolute">Заполните поле</span>
              </div>
              <div className="mb-3 relative pb-3 space-y-1">
                <label className="block font-medium text-lg">Пароль: <span className="text-red-400">*</span></label>
                <input
                  className="border border-solid border-gray-400 block w-full py-2 px-2 rounded-md focus:outline-none focus:border-primary-light shadow-md"
                  type="password"
                  placeholder="Введите пароль"/>
                <span className="text-red-400 text-xs absolute">Заполните поле</span>
              </div>
              <div className="mb-5 relative pb-3 space-y-1">
                <label className="block font-medium text-lg">Повтор: <span className="text-red-400">*</span></label>
                <input
                  className="border border-solid border-gray-400 block w-full py-2 px-2 rounded-md focus:outline-none focus:border-primary-light shadow-md"
                  type="password"
                  placeholder="Повторите пароль"/>
                <span className="text-red-400 text-xs absolute">Пароли не совпадают</span>
              </div>
              <div className="mb-5 relative pb-3 space-y-1">
                <label className="block text-sm text_gray_color cursor-pointer">
                  <input type="checkbox"/>
                  <span>Я принимаю условие пользовательского соглашения</span>
                </label>
                <span className="text-red-400 text-xs absolute">Необходимо согласиться с соглашением</span>
              </div>
              <button
                disabled={true}
                className="mt-2 w-full uppercase rounded-md hover:bg-primary px-6 py-2 hover:text-white tracking-wider font-semibold focus:outline-none bg-primary-light transition duration-100 text-black
                  sm:w-auto sm:self-end shadow-md
 "
                type="submit">Регистрация
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
import React from 'react';
import {NextPage} from "next";

const Login: NextPage = () => {
  return (
    <div className="bg-black">
      <main className="flex items-center justify-center px-4 py-6 bg-auth bg-no-repeat bg-top">
        <section className="h mx-auto max-w-2xl w-full bg-white py-6 px-4 rounded-md shadow-md">
          <div className="space-y-20">
            <div className="space-y-1 text-center">
              <h1 className="text-2xl text-black font-semibold">Вход в систему</h1>
              <div className="flex items-center justify-center space-x-1 text-xs">
                <span className="text_gray_color">Нет аккаунта?</span>
                <a className="link_blur_color" href="#">Зарегистрироваться</a>
              </div>
            </div>

            <form className="flex flex-col">
              <div className="mb-3 relative pb-3 space-y-1">
                <label className="block font-medium text-lg">Email</label>
                <input
                  className="border border-solid border-gray-500 block w-full py-2 px-2 rounded-md focus:outline-none focus:border-primary-light"
                  type="email"
                  placeholder="Укажите email"/>
                <span className="text-red-400 text-xs absolute">Заполните поле</span>
              </div>
              <div className="mb-5 relative pb-3 space-y-1">
                <label className="block font-medium text-lg">Email</label>
                <input
                  className="border border-solid border-gray-500 block w-full py-2 px-2 rounded-md focus:outline-none focus:border-primary-light"
                  type="email"
                  placeholder="Укажите email"/>
                <span className="text-red-400 text-xs absolute">Заполните поле</span>
              </div>
              <button
                disabled={true}
                className="mt-2 uppercase self-end rounded-md hover:bg-primary px-6 py-2 hover:text-white tracking-wider font-semibold focus:outline-none bg-primary-light transition duration-100 text-black
              disabled:bg-gray-500 disabled:cursor-not-allowed active:rotate-2"
                type="submit">Войти
              </button>
            </form>
          </div>

        </section>
      </main>
    </div>
  );
};

export default Login;
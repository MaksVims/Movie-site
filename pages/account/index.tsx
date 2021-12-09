import React from 'react';
import {NextPage} from "next";
import {useAuth} from "@/contexts/AuthContext";
import MainLayout from "@/components/layouts/MainLayout";

interface IProfileProps {

}

const Profile: NextPage<IProfileProps> = () => {
  const {user} = useAuth()
  console.log(user)
  return (
    <MainLayout>
      <main
        className="flex-center absolute-main min-screen px-2 md:py-0 pb-6 bg-no-repeat bg-center bg-profile bg-cover ">
        <section
          className="bg-transparent relative rounded-md overflow-hidden min-w-full md:min-w-[750px] xl:min-w-[1024px] z-10">
          <div className="absolute bg-gray-100 top-0 left-0 full opacity-20"></div>
          <div className="p-4 md:p-10 min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-white p-4 rounded-md row-span-2 flex flex-col justify-between space-y-6">
              <div className="flex flex-col space-y-6">
                <div className="h-90 w-90 self-center mt-4">
                  <img src="https://picsum.photos/140/140" alt="avatar" className="flex-shrink-0 rounded-full"/>
                </div>
                <ul className="space-y-2">
                  <li className="truncate ">
                    <span className="font-medium text-xl ">Имя:</span>
                    <span className="xl:text-xl ">{user?.displayName}</span>
                  </li>
                  <li className="truncate ">
                    <span className="font-medium text-xl">Email:</span>
                    <span className="xl:text-xl ">{user?.email}</span>
                  </li>
                  <li className="truncate">
                    <span className="truncate font-medium text-xl">Phone:</span>
                    <span className="xl:text-xl">89620155660</span>
                  </li>
                </ul>
              </div>
              <button
                className="sm:text-sm sm:w-auto sm:self-end hover:bg-green-700 rounded-md py-2 px-4 bg-green-500 text-white w-full sm:w-24!">Save
              </button>
            </div>
            <div className="bg-white p-4 rounded-md max-h-64 scrollbar-hide overflow-x-auto">
              <h2 className="font-semibold text-xl text-lg mb-2">Любимые фильмы</h2>
              <ul className="space-y-2">
                <li className="text-lg">Фильм 1</li>
                <li className="text-lg">Фильм 1</li>
                <li className="text-lg">Фильм 1</li>
                <li className="text-lg">Фильм 1</li>
                <li className="text-lg">Фильм 1</li>
                <li className="text-lg">Фильм 1</li>
                <li className="text-lg">Фильм 1</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-md">
              <div className="flex flex-col items-start space-y-4 justify-center">
                <button className="hover:bg-red-700 rounded-md py-2 px-4 bg-red-500 text-white">Выход</button>
                <button className="hover:bg-red-700 rounded-md py-2 px-4 bg-red-500 text-white">Удаление аккаунта
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default Profile;

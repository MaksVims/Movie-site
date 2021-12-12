import React, {FC} from 'react';
import Logo from 'public/images/logo.png'
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="bg-black p-4 text-white xl:px-8">
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between">
        <Image
          src={Logo.src}
          width={100}
          height={40}
          className="flex-shrink-0"
        />
        <div className="flex flex-col items-center space-y-2">
          <span className=" cursor-pointer hover:underline">
          Пользовательское соглашение
        </span>
          <span className="text-xs">Не для коммерческого использования</span>
          <span className="text-xs">
          Данные взяты с
            <a
              href="https://kinopoiskapiunofficial.tech/"
              className="link-blur-color hover:underline ml-1"
            >
           kinopoiskapiunofficial.tech
          </a>
        </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
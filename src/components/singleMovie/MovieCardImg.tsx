import React, {FC} from 'react';
import {IMovie} from "#/movieTypes";
import Image from "next/image";
import {FaHeart} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import cn from "classnames";
import getFormatTime from 'helpers/getFormatTime';
import {GRAY_COLOR} from "@/const";

interface IMovieCardImg {
  movie: IMovie,
}

const MovieCardImg: FC<IMovieCardImg> = ({movie}) => {

  const imageBottomClass = cn({
    'justify-center': !movie.filmLength,
    'justify-between': movie.filmLength,
    'h-auto flex items-center p-1': true,
  })

  return (
    <div className="flex-grow-0 md:min-w-sm shadow-movieCard rounded-md overflow-hidden md:mr-4 md:mt-4">
      <Image src={movie.posterUrl}
             alt={movie.nameOriginal}
             height={280}
             width={205}
             className="flex-grow-0"
      />
      <div className={imageBottomClass}>
        {movie.filmLength &&
        <p className="text-gray-color flex items-center">
          <BiTime size={20} className="mr-1"/>
          <span className="text-sm">{getFormatTime(movie.filmLength)}</span>
        </p>}
        <FaHeart
          className="cursor-pointer hover:scale-110"
          color={GRAY_COLOR}
          size={25}
        />
      </div>
    </div>
  );
};

export default MovieCardImg;
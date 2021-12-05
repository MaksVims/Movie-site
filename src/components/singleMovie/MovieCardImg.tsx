import React, {FC} from 'react';
import {IMovie} from "#/movieTypes";
import Image from "next/image";
import {FaHeart} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import cn from "classnames";
import getFormatTime from 'helpers/getFormatTime';

interface IMovieCardImg {
  movie: IMovie
}

const MovieCardImg: FC<IMovieCardImg> = ({movie}) => {

  const imageBottomClass = cn({
    'justify-center': !movie.filmLength,
    'justify-between': movie.filmLength,
    'h-auto flex items-center p-1': true,
  })

  return (
    <div className="shadow-movieCard rounded-md overflow-hidden max-w-md">
      <Image src={movie.posterUrl}
             alt={movie.nameOriginal}
             height={280}
             width={205}
      />
      <div className={imageBottomClass}>
        {movie.filmLength &&
        <p className="movie_card_content_text_color flex items-center">
          <BiTime size={20} className="mr-1"/>
          {getFormatTime(movie.filmLength)}
        </p>}
        <FaHeart
          className="cursor-pointer hover:scale-110"
          color={"#9f9f9f"}
          size={25}
        />
      </div>
    </div>
  );
};

export default MovieCardImg;
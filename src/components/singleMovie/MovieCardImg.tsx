import React, {FC} from 'react';
import Image from "next/image";
import {BiTime} from 'react-icons/bi'
import cn from "classnames";
import {observer} from 'mobx-react-lite';
import {ISingleMovie} from "types";
import {getFormatTime} from 'helpers';
import {Like} from "@/components/ui";
import {useMovieLike} from "@/hooks";
import {useAuth} from "@/contexts/AuthContext";

interface IMovieCardImg {
  movie: ISingleMovie,
}

const MovieCardImg: FC<IMovieCardImg> = ({movie}) => {
  const {user} = useAuth()
  const {addMovieToCollection, removeMovieToCollection, isActive} = useMovieLike(movie.kinopoiskId, movie.nameRu)

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
        {
          movie.filmLength && (
            <p className="text-gray-color flex items-center">
              <BiTime size={20} className="mr-1"/>
              <span className="text-sm">{getFormatTime(movie.filmLength)}</span>
            </p>
          )
        }
        {
          user && (
            <Like
              size={25}
              onClick={isActive ? removeMovieToCollection : addMovieToCollection}
              className="hover:scale-110"
              active={isActive}
            />
          )
        }
      </div>
    </div>
  );
};

export default observer(MovieCardImg);
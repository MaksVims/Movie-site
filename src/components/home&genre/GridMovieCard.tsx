import React, {FC} from 'react';
import {IMovieForGrid} from "#/movieTypes";
import Image from "next/image";
import {MdOutlineStarRate} from "react-icons/md";
import Link from 'next/link'

interface IGridMoveItem {
  movie: IMovieForGrid
}

const GridMovieCard: FC<IGridMoveItem> = ({movie}) => {
  return (
    <article
      className="group cursor-pointer transform transition-transform duration-200 sm:hover:scale-105"
    >
      <Link href={`/movies/${movie.movieId}`}>
        <a>
          <Image
            src={movie.posterUrlPreview}
            width={950}
            height={1080}
            layout={"responsive"}
            alt={movie.nameRu}
          />
          <div className="mt-1 text-white md:mt-3">
            <h2 className="font-medium mb-2 font-bold text-xl xl:text-2xl">
              {movie.nameRu}
            </h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">
              {movie?.year && <span className="mr-2">{movie.year} год</span>}
              {movie?.rating && <MdOutlineStarRate color={'fff'} size={20} className="mr-2"/>}
              {movie?.rating && <span>{movie.rating}</span>}
            </p>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default GridMovieCard;
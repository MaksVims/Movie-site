import React, {FC} from 'react';
import {RiCloseFill} from 'react-icons/ri'
import Link from 'next/link'
import theme from "@/const/theme";
import {TCollectionItem} from "types";

interface IFavoriteMovieListItem {
  movie: TCollectionItem,
  handle: () => {}
}

const FavoriteMovieListItem: FC<IFavoriteMovieListItem> = ({movie, handle}) => {

  return (
    <li className="text-lg flex justify-between items-center">
      <Link href={`/movies/${movie.movieId}`}>
        <a className="hover:underline mr-2">{movie.title}</a>
      </Link>
      <RiCloseFill
        color={theme.colors.red[500]}
        size={23}
        className="flex-shrink-0 cursor-pointer hover:bg-red-200 rounded-full transition duration-100"
        onClick={handle}
      />
    </li>
  );
};

export default FavoriteMovieListItem;
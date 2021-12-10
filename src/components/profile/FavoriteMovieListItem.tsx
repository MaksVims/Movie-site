import React, {FC} from 'react';
import {IMovie} from "#/movieTypes";

interface IFavoriteMovieListItem {
  movie: IMovie
}

const FavoriteMovieListItem: FC<IFavoriteMovieListItem> = ({movie}) => {
  return (
    <li className="text-lg">
      {movie.nameRu}
    </li>
  );
};

export default FavoriteMovieListItem;
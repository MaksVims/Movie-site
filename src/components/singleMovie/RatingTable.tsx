import React, {FC} from 'react';
import {ISingleMovie} from "types";

interface RatingTableProps {
  movie: ISingleMovie
  className?: string,
}

const RatingTable:FC<RatingTableProps> = ({movie,className}) => {
  return (
    <ul className={`grid ${className || ''}`}>
      <li className="font-medium red-frame">
        <span className="mr-1">КП</span>
        <span>{movie.ratingKinopoisk}</span>
      </li>
      <li className="font-medium yellow-frame">
        <span className="mr-1">IMDB </span>
        <span>{movie.ratingImdb}</span>
      </li>
      <li className="red-frame">
        <span className="font-medium mr-1">КП: </span>
        <span className="text-center">{movie.ratingKinopoiskVoteCount} оценок</span>
      </li>
      <li className="yellow-frame">
        <span className="font-medium mr-1">IMDB: </span>
        <span className="text-center">{movie.ratingImdbVoteCount} оценок</span>
      </li>
    </ul>
  );
};

export default RatingTable;
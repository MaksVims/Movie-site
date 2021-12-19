import React, {FC} from "react";
import Link from "next/link";
import {formatFirstToUppercase} from "helpers";

interface ListGenresProps {
  genres: { ru: string, en: string }[]
}

const ListGenres: FC<ListGenresProps> = ({genres}) => {
  return (
    <div className="inline">
      <span className="font-medium mr-1">Категории: </span>
      {
        genres.map((genre, idx) => (
          <React.Fragment key={genre.en + idx}>
            <span>{idx === 0 ? `` : ' / '}</span>
            <Link
              href={`/${genre.en}`}
            >
              <a className="text-blue-400 underline">
                {formatFirstToUppercase(genre.ru)}
              </a>
            </Link>
          </React.Fragment>
        ))
      }
    </div>
  );
};

export default ListGenres;
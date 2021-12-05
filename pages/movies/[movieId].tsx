import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IMovie} from "#/movieTypes";
import {ParsedUrlQuery} from "querystring";
import {MovieService} from "@/api/MovieService";
import Image from "next/image";
import {useFilters} from "@/contexts/FiltersContext";
import Link from "next/link";
import {getTitleGenreByRuName} from 'helpers/getTitleGenrebyRuName';

interface IMoviePageProps {
  movie: IMovie
}

const MovieId: NextPage<IMoviePageProps> = ({movie}) => {
  const filters = useFilters()

  if (!filters) return <div>Loading...</div>
  return (
    <MainLayout>
      <main>
        <section className="flex flex-col items-center bg-white pt-4">
          <Image src={movie.posterUrl}
                 alt={movie.nameOriginal}
                 height={280}
                 width={200}
          />
          <div className="mt-2 w-full">
            <h1 className="font-bold text-2xl mb-4">
              {movie.nameRu}
            </h1>
            <div>
              <ul>
                <li>
                  <span>Название:</span>
                  <span>{movie.nameRu}</span>
                </li>
                <li>
                  <span>Год выхода:</span>
                  <span>{movie.year}</span>
                </li>
                <li>
                  <span>Cтрана:</span>
                  <span>{movie.countries.map(county => county.country).join(', ')}</span>
                </li>
                <li>
                  <span>Оригинальное название:</span>
                  <span>{movie.nameOriginal}</span>
                </li>
              </ul>
              <ul className="grid grid-cols-2">
                <li>
                  <span>КП</span>
                  <span>{movie.ratingKinopoisk}</span>
                </li>
                <li>
                  <span>IMDB</span>
                  <span>{movie.ratingImdb}</span>
                </li>
                <li>
                  <span>КП</span>
                  <span>{movie.ratingKinopoiskVoteCount}</span>
                </li>
                <li>
                  <span>IMDB</span>
                  <span>{movie.ratingImdbVoteCount}</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>Категории: </span>
                  <div>
                    {movie.genres.map(itemGenre => (
                      <span>
                        <Link href={`/${getTitleGenreByRuName(filters.genres, itemGenre.genre)}`}>
                          <a>{itemGenre.genre}</a>
                        </Link>
                      </span>
                    ))}
                  </div>
                </li>
                <li>
                  <span>Описание: </span>
                  <span>{movie.description || movie.shortDescription}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <video
            src="#"
            controls={true}
            className="w-full"
          />
        </section>
      </main>
    </MainLayout>
  );
};

export default MovieId;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

interface IParams extends ParsedUrlQuery {
  movieId: string
}

export const getStaticProps: GetStaticProps<IMoviePageProps, IParams> = async (context) => {
  const {movieId} = context.params!
  try {
    const movie = await MovieService.getMovieById(Number(movieId))
    return {
      props: {
        movie
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
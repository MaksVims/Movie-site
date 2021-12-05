import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IMovie} from "#/movieTypes";
import {ParsedUrlQuery} from "querystring";
import {MovieService} from "@/api/MovieService";

interface IMoviePageProps {
  movie: IMovie
}

const MovieId: NextPage<IMoviePageProps> = ({movie}) => {
  return (
    <MainLayout>
      <main>
        <h1>{movie.nameRu}</h1>
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
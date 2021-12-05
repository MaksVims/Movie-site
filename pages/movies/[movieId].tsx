import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IMovie} from "#/movieTypes";
import {ParsedUrlQuery} from "querystring";
import {MovieService} from "@/api/MovieService";
import MovieCardContent from "@/components/singleMovie/MovieCardContent";
import MovieCardImg from "@/components/singleMovie/MovieCardImg";

interface IMoviePageProps {
  movie: IMovie
}

const MovieId: NextPage<IMoviePageProps> = ({movie}) => {

  return (
    <MainLayout>
      <main className="w-full h-full mx-auto mt-2 max-w-[1024px]">
        <section
          className="flex flex-col md:mx-auto items-center bg-white py-6 px-2 md:flex-row md:items-start md:px-6">
          <MovieCardImg movie={movie}/>
          <MovieCardContent movie={movie}/>
        </section>
        <section className="pt-6 bg-white">
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
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
      <main>
        <section className="flex flex-col items-center bg-white py-6 px-2 ">
          <MovieCardImg movie={movie}/>
          <MovieCardContent movie={movie}/>
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
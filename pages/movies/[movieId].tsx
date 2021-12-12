import React from 'react';
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IMovie} from "#/movieTypes";
import {ParsedUrlQuery} from "querystring";
import {MovieService} from "@/api/MovieService";
import MovieCardContent from "@/components/singleMovie/MovieCardContent";
import MovieCardImg from "@/components/singleMovie/MovieCardImg";
import {IStaffByMovie} from "#/staffTypes";
import StaffService from "@/api/StaffService";

interface IMoviePageProps {
  movie: IMovie,
  staff: IStaffByMovie[]
}

const MovieId: NextPage<IMoviePageProps> = ({movie,staff}) => {

  return (
    <MainLayout>
      <main className="mx-auto my-2 max-w-[1024px] flex flex-col rounded-tl-md rounded-tr-md overflow-hidden">
        <section
          className="flex flex-col md:mx-auto items-center bg-white py-6 px-2 md:flex-row md:items-start md:px-6">
          <MovieCardImg movie={movie}/>
          <MovieCardContent movie={movie} staff={staff}/>
        </section>
        <section className="pt-6 bg-white flex-1">
          <div className="px-4">
            <h2 className="font-medium ">Смотреть видео {movie.nameRu} онлайн бесплатно</h2>
          </div>
          <video
            src="#"
            controls={true}
            className="full"
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
    const staff = await StaffService.getStaffByMovie(Number(movieId))

    return {
      props: {
        movie,
        staff
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
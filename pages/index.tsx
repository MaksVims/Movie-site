import React, {useMemo} from 'react';
import {GetStaticProps, NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import {IResponseFilterGenre} from "#/filtersTypes";
import GenreList from "@/components/home&genre/GenreList";
import GridMovies from "@/components/home&genre/GridMovies";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import transformDBMoviesToMoviesGrid from "../helpers/transformDBMoviesToMoviesGrid";


interface IHomePageProps {
  filters: IResponseFilterGenre,
  responseResult: IResponseMoviesByFiltersOrTop
}

const Home: NextPage<IHomePageProps> = ({filters, responseResult}) => {

  const moviesForGrid = useMemo(
    () => transformDBMoviesToMoviesGrid(responseResult.films),
    [responseResult])

  return (
    <MainLayout>
      <main>
        <GenreList genres={filters.genres}/>
        <GridMovies movies={moviesForGrid}/>
      </main>
    </MainLayout>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  try {
    const filters = await MovieService.getFilters()
    const responseResult = await MovieService.getTopMovies()

    return {
      props: {
        filters,
        responseResult
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}


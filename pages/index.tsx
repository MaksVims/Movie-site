import React from 'react';
import {GetStaticProps, NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import {IResponseFilterGenre} from "#/filtersTypes";
import GenreList from "@/components/home/GenreList";
import GridMovies from "@/components/home/GridMovies";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";


interface IHomePageProps {
  filters: IResponseFilterGenre,
  responseResult: IResponseMoviesByFiltersOrTop
}

const Home: NextPage<IHomePageProps> = ({filters, responseResult}) => {

  return (
    <MainLayout>
      <main>
        <GenreList genres={filters.genres}/>
        <GridMovies movies={responseResult.films}/>
      </main>
    </MainLayout>
  );
};

export default Home;


export const getStaticProps: GetStaticProps<IHomePageProps> = async (context) => {
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


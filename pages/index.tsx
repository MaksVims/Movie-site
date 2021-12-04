import React from 'react';
import {NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import {IResponseFilterGenre} from "#/filtersTypes";
import GenreList from "@/components/home/GenreList";
import GridMovies from "@/components/home/GridMovies";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";

interface IHomePage {
  filters: IResponseFilterGenre,
  responseResult: IResponseMoviesByFiltersOrTop
}

const Home: NextPage<IHomePage> = ({filters, responseResult}) => {
  console.log(responseResult)

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

export async function getStaticProps() {
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
    console.log(e)
  }
}
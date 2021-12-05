import React from 'react';
import GenreList from "@/components/home&genre/GenreList";
import GridMovies from "@/components/home&genre/GridMovies";
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IResponseFilterGenre} from "#/filtersTypes";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import {MovieService} from "@/api/MovieService";
import {ParsedUrlQuery} from "querystring";

interface IGenrePageProps {
  filters: IResponseFilterGenre,
  responseResult: IResponseMoviesByFiltersOrTop
}

const GenrePage: NextPage<IGenrePageProps> = ({filters, responseResult}) => {
  return (
    <MainLayout>
      <main>
        <GenreList genres={filters.genres}/>
        <GridMovies movies={responseResult.films}/>
      </main>
    </MainLayout>
  );
};

export default GenrePage;

interface IParams extends ParsedUrlQuery {
  genre: string
}

export const getStaticProps: GetStaticProps<IGenrePageProps, IParams> = async (context) => {
  try {
    const filters = await MovieService.getFilters()
    const {genre} = context.params!
    const filterItem = filters.genres.find(item => item.title === genre)!
    const responseResult = await MovieService.getMoviesByFilters({genre: filterItem.id, page: 1})

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
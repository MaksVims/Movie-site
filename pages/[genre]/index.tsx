import React, {useMemo} from 'react';
import ScrollBarGenre from "@/components/home&genre/ScrollBarGenre";
import GridMovies from "@/components/home&genre/GridMovies";
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import {MovieService} from "@/api/MovieService";
import {ParsedUrlQuery} from "querystring";
import transformDBMoviesToMoviesGrid from "../../helpers/transformDBMoviesToMoviesGrid";
import {DATA_FILTERS} from "@/const/dataFilters";
import FooterLayout from "@/components/layouts/FooterLayout";

interface IGenrePageProps {
  responseResult: IResponseMoviesByFiltersOrTop
}

const GenrePage: NextPage<IGenrePageProps> = ({responseResult}) => {
  const moviesForGrid = useMemo(
    () => transformDBMoviesToMoviesGrid(responseResult.films),
    [responseResult])

  return (
    <MainLayout>
      <FooterLayout>
        <main>
          <ScrollBarGenre/>
          <GridMovies movies={moviesForGrid}/>
        </main>
      </FooterLayout>
    </MainLayout>
  );
};

export default GenrePage;

interface IParams extends ParsedUrlQuery {
  genre: string
}

export const getStaticProps: GetStaticProps<IGenrePageProps, IParams> = async (context) => {
  try {
    const {genre} = context.params!
    const filterItem = DATA_FILTERS.genres.find(item => item.title === genre)!
    const responseResult = await MovieService.getMoviesByFilters({genre: filterItem.id, page: 1})

    return {
      props: {
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
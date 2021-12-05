import React, {useMemo} from 'react';
import {GetStaticProps, NextPage} from "next";
import {IResponseFilterGenre} from "#/filtersTypes";
import {IResponseMoviesPremieres} from "#/responseTypes";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import GenreList from "@/components/home&genre/GenreList";
import GridMovies from "@/components/home&genre/GridMovies";
import transformDBMoviesToMoviesGrid from "+/transformDBMoviesToMoviesGrid";


interface IPremieresPageProps {
  filters: IResponseFilterGenre,
  responseResult: IResponseMoviesPremieres
}

const PremieresPage: NextPage<IPremieresPageProps> = ({filters, responseResult}) => {
  const moviesForGrid = useMemo(
    () => transformDBMoviesToMoviesGrid(responseResult.items),
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

export default PremieresPage;

export const getStaticProps: GetStaticProps<IPremieresPageProps> = async () => {
  try {
    const filters = await MovieService.getFilters()
    const responseResult = await MovieService.getPremiers()

    return {
      props: {
        filters,
        responseResult
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
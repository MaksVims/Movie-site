import React, {useCallback, useEffect} from 'react';
import ScrollBarGenre from "@/components/main/ScrollBarGenre";
import GridMovies from "@/components/main/GridMovies";
import MainLayout from "@/components/layouts/MainLayout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import {MovieService} from "@/api/MovieService";
import {ParsedUrlQuery} from "querystring";
import {DATA_FILTERS} from "@/const/dataFilters";
import FooterLayout from "@/components/layouts/FooterLayout";
import moviesState from "@/store/MoviesState";
import {observer} from "mobx-react-lite";
import BarSortFilters from "@/components/main/BarSortFilters";
import BoxDisplayCenter from "@/components/ui/BoxDisplayCenter";
import {MoviesState} from "@/store";
import usePagination from "@/hooks/usePagination";
import {SortType} from "#/filtersTypes";
import BtnLoadNextPage from "@/components/ui/BtnLoadNextPage";
import Seo from "@/hoc/Seo";
import formatFirstToUppercase from '+/formatFirstToUppercase';
import BoxLoader from "@/components/ui/BoxLoader";

interface IGenrePageProps {
  dataMovies: IResponseMoviesByFiltersOrTop,
  genre: string,
  genreId: number
}

const GenrePage: NextPage<IGenrePageProps> = ({dataMovies, genre, genreId}) => {
  const totalPages = dataMovies.pagesCount
  const filter = MoviesState.filter

  const [fetchNextPage, loadNextPage, currentPage] = usePagination(
    totalPages,
    useCallback(async (page: number) => {
      const result = await MovieService.getMoviesByFilters({page, genre: genreId})
      moviesState.setMovies(result.films)
    }, [genreId]))

  const filteredMovies = moviesState.filteredMovies

  useEffect(() => {
    moviesState.setMovies(dataMovies.films)
    return () => moviesState.resetMovies()
  }, [dataMovies.films])

  const paginationView = currentPage < totalPages && filter !== SortType.FAVORITE && filteredMovies.length && (
    <BtnLoadNextPage
      fetching={fetchNextPage}
      className="text-center my-8"
    />
  )

  return (
    <Seo
      title={`${formatFirstToUppercase(genre)}`}
      keywords={"Лучшие фильмы, топ фильмов, коллекции"}
    >
      <MainLayout>
        <FooterLayout>
          <main className="page-main">
            <ScrollBarGenre/>
            <BarSortFilters/>
            {filteredMovies.length ?
              <GridMovies movies={filteredMovies}/> : (
                <div className="flex flex-1">
                  <BoxDisplayCenter
                    title="Фильмы не найдены"
                    className="text-white text-xl"
                  />
                </div>
              )}
            <div className="relative">
              {loadNextPage ? <BoxLoader/> : paginationView}
            </div>
          </main>
        </FooterLayout>
      </MainLayout>
    </Seo>

  );
};

export default observer(GenrePage);

interface IParams extends ParsedUrlQuery {
  genre: string
}

export const getStaticProps: GetStaticProps<IGenrePageProps, IParams> = async (context) => {
  try {
    const {genre} = context.params!
    const filterItem = DATA_FILTERS.genres.find(item => item.title === genre)!
    const dataMovies = await MovieService.getMoviesByFilters({genre: filterItem.id, page: 1})

    return {
      props: {
        dataMovies,
        genre: filterItem.genre,
        genreId: filterItem.id
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
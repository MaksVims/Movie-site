import React, {useCallback, useEffect} from 'react';
import {GetStaticProps, NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import GridMovies from "@/components/main/GridMovies";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import FooterLayout from "@/components/layouts/FooterLayout";
import Seo from "@/hoc/Seo";
import {observer} from 'mobx-react-lite';
import moviesState from "@/store/MoviesState";
import ScrollBarGenre from '@/components/main/ScrollBarGenre';
import BarSortFilters from "@/components/main/BarSortFilters";
import usePagination from "@/hooks/usePagination";
import BtnLoadNextPage from "@/components/ui/BtnLoadNextPage";
import BoxLoader from '@/components/ui/BoxLoader';
import {MoviesState} from "@/store";
import {SortType} from "#/filtersTypes";
import BoxDisplayCenter from "@/components/ui/BoxDisplayCenter";

interface IHomePageProps {
  dataMovies: IResponseMoviesByFiltersOrTop
}

const Home: NextPage<IHomePageProps> = ({dataMovies}) => {
  const totalPages = dataMovies.pagesCount
  const filter = MoviesState.filter

  const [fetchNextPage, loadNextPage, currentPage] = usePagination(
    totalPages,
    useCallback(async (page: number) => {
      const result = await MovieService.getTopMovies(page)
      moviesState.setMovies(result.films)
    }, []))

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
      title={"Hulu"}
      keywords={"Лучшие фильмы, топ фильмов"}
    >
      <MainLayout>
        <FooterLayout>
          <main className="page-main">
            <ScrollBarGenre/>
            <BarSortFilters/>
            {filteredMovies.length ?
              <GridMovies movies={filteredMovies}/> : (
                <div className="flex flex-1 relative">
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

export default observer(Home);

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  try {
    const dataMovies = await MovieService.getTopMovies()

    return {
      props: {
        dataMovies
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}


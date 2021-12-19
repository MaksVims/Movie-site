import React, {useCallback, useEffect} from 'react';
import {GetStaticProps, NextPage} from "next";
import {observer} from 'mobx-react-lite';
import {IResponseMoviesByFiltersOrTop, SortType} from "types";
import {MovieService} from "@/api";
import {MoviesState} from "@/store";
import {usePagination} from "@/hooks";
import Seo from "@/hoc/Seo";
import {GridMovies, ScrollBarGenre, BarSortFilters} from "@/components/main";
import {MainLayout, FooterLayout} from "@/components/layouts";
import {BtnLoadNextPage, BoxLoader, BoxDisplayCenter} from "@/components/ui";

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
      MoviesState.setMovies(result.films)
    }, []))

  const filteredMovies = MoviesState.filteredMovies

  useEffect(() => {
    MoviesState.setMovies(dataMovies.films)
    return () => MoviesState.resetMovies()
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


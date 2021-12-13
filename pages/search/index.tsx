import React, {useEffect} from 'react';
import {GetServerSideProps, NextPage} from "next";
import {IResponseSearchByKeyWord} from "#/responseTypes";
import {MovieService} from "@/api/MovieService";
import MainLayout from "@/components/layouts/MainLayout";
import FooterLayout from "@/components/layouts/FooterLayout";
import installMainHeight from "+/installMainHeight";
import ScrollBarGenre from "@/components/main/ScrollBarGenre";
import BarSortFilters from "@/components/main/BarSortFilters";
import GridMovies from "@/components/main/GridMovies";
import Seo from "@/hoc/Seo";
import moviesState from "@/store/MoviesState";
import {observer} from 'mobx-react-lite';


interface SearchPageProps {
  dataMovies: IResponseSearchByKeyWord
}

const SearchPage: NextPage<SearchPageProps> = ({dataMovies}) => {

  useEffect(() => {
    moviesState.setMovies(dataMovies.films)
    return () => moviesState.setMovies([])
  }, [dataMovies.films])

  const filteredMovies = moviesState.filteredMovies
  console.log(dataMovies)

  return (
    <Seo
      title={"Результаты поиска"}
      keywords={"Лучшие фильмы, топ фильмов"}
      indexed={false}
    >
      <MainLayout>
        <FooterLayout>
          <main className={installMainHeight(filteredMovies.length)}>
            <ScrollBarGenre/>
            <BarSortFilters/>
            <div className="text-white text-xl text-center mt-10">
              <h2>Всего найдено: {dataMovies.searchFilmsCountResult} фильмов</h2>
            </div>
            <GridMovies movies={filteredMovies}/>
          </main>
        </FooterLayout>
      </MainLayout>
    </Seo>
  );
};

export default observer(SearchPage);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const keyword = ctx.query.keyword
  const dataMovies = await MovieService.getMoviesByKeyWord(String(keyword), 1)

  return {
    props: {
      dataMovies
    }
  }
}
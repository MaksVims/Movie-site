import React, {useEffect} from 'react';
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
import installMainHeight from '+/installMainHeight';

interface IHomePageProps {
  responseResult: IResponseMoviesByFiltersOrTop
}

const Home: NextPage<IHomePageProps> = ({responseResult}) => {

  useEffect(() => {
    moviesState.setMovies(responseResult.films)
    return () => moviesState.setMovies([])
  }, [responseResult.films])
  
  const filteredMovies = moviesState.filteredMovies

  return (
    <Seo
      title={"Hulu"}
      keywords={"Лучшие фильмы, топ фильмов"}
    >
      <MainLayout>
        <FooterLayout>
          <main className={installMainHeight(filteredMovies.length)}>
            <ScrollBarGenre/>
            <BarSortFilters/>
            <GridMovies movies={filteredMovies}/>
          </main>
        </FooterLayout>
      </MainLayout>
    </Seo>
  );
};

export default observer(Home);

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  try {
    const responseResult = await MovieService.getTopMovies()

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


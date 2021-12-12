import React, {useMemo} from 'react';
import {GetStaticProps, NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import ScrollBarGenre from "@/components/home&genre/ScrollBarGenre";
import GridMovies from "@/components/home&genre/GridMovies";
import {IResponseMoviesByFiltersOrTop} from "#/responseTypes";
import transformDBMoviesToMoviesGrid from "../helpers/transformDBMoviesToMoviesGrid";
import FooterLayout from "@/components/layouts/FooterLayout";
import Seo from "@/hoc/Seo";

interface IHomePageProps {
  responseResult: IResponseMoviesByFiltersOrTop
}

const Home: NextPage<IHomePageProps> = ({responseResult}) => {
  const moviesForGrid = useMemo(
    () => transformDBMoviesToMoviesGrid(responseResult.films),
    [responseResult])

  return (
    <Seo
      title={"Hulu"}
      keywords={"Лучшие фильмы, топ фильмов"}
    >
      <MainLayout>
        <FooterLayout>
          <main>
            <ScrollBarGenre/>
            <GridMovies movies={moviesForGrid}/>
          </main>
        </FooterLayout>
      </MainLayout>
    </Seo>
  );
};

export default Home;

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


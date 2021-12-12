import React, {useMemo} from 'react';
import {GetStaticProps, NextPage} from "next";
import {IResponseMoviesPremieres} from "#/responseTypes";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import ScrollBarGenre from "@/components/home&genre/ScrollBarGenre";
import GridMovies from "@/components/home&genre/GridMovies";
import transformDBMoviesToMoviesGrid from "+/transformDBMoviesToMoviesGrid";
import FooterLayout from "@/components/layouts/FooterLayout";

interface IPremieresPageProps {
  responseResult: IResponseMoviesPremieres
}

const PremieresPage: NextPage<IPremieresPageProps> = ({responseResult}) => {
  const moviesForGrid = useMemo(
    () => transformDBMoviesToMoviesGrid(responseResult.items),
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

export default PremieresPage;

export const getStaticProps: GetStaticProps<IPremieresPageProps> = async () => {
  try {
    const responseResult = await MovieService.getPremiers()

    return {
      props: {
        responseResult
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
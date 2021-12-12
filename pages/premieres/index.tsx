import React, {useEffect} from 'react';
import {GetStaticProps, NextPage} from "next";
import {IResponseMoviesPremieres} from "#/responseTypes";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import ScrollBarGenre from "@/components/home&genre/ScrollBarGenre";
import GridMovies from "@/components/home&genre/GridMovies";
import FooterLayout from "@/components/layouts/FooterLayout";
import Seo from "@/hoc/Seo";
import moviesState from "@/store/MoviesState";
import installMainHeight from "+/installMainHeight";
import BarSortFilters from "@/components/home&genre/BarSortFilters";
import {observer} from 'mobx-react-lite';

interface IPremieresPageProps {
  responseResult: IResponseMoviesPremieres
}

const PremieresPage: NextPage<IPremieresPageProps> = ({responseResult}) => {
  useEffect(() => {
    moviesState.setMovies(responseResult.items)
  }, [responseResult.items])
  const filteredMovies = moviesState.filteredMovies

  return (
    <Seo
      title="Ближайшие премьеры"
      keywords="Премьера, новинки"
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

export default observer(PremieresPage);

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
import React, {useEffect} from 'react';
import {GetStaticProps, NextPage} from "next";
import {IResponseMoviesPremieres} from "#/responseTypes";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import ScrollBarGenre from "@/components/main/ScrollBarGenre";
import GridMovies from "@/components/main/GridMovies";
import FooterLayout from "@/components/layouts/FooterLayout";
import Seo from "@/hoc/Seo";
import moviesState from "@/store/MoviesState";
import BarSortFilters from "@/components/main/BarSortFilters";
import {observer} from 'mobx-react-lite';
import BoxDisplayCenter from "@/components/ui/BoxDisplayCenter";

interface IPremieresPageProps {
  dataMovies: IResponseMoviesPremieres
}

const PremieresPage: NextPage<IPremieresPageProps> = ({dataMovies}) => {
  useEffect(() => {
    moviesState.setMovies(dataMovies.items)
    return () => moviesState.resetMovies()
  }, [dataMovies.items])

  const filteredMovies = moviesState.filteredMovies

  return (
    <Seo
      title="Ближайшие премьеры"
      keywords="Премьера, новинки"
    >
      <MainLayout>
        <FooterLayout>
          <main className="flex-1 flex flex-col">
            <ScrollBarGenre/>
            <BarSortFilters/>
            {filteredMovies.length ?
              <GridMovies movies={filteredMovies}/> : (
              <div className="relative flex-1">
                <BoxDisplayCenter
                  title="Фильмы не найдены"
                  className="text-white text-xl"
                />
              </div>
              )}
          </main>
        </FooterLayout>
      </MainLayout>
    </Seo>
  );
};

export default observer(PremieresPage);

export const getStaticProps: GetStaticProps<IPremieresPageProps> = async () => {
  try {
    const dataMovies = await MovieService.getPremiers()

    return {
      props: {
        dataMovies
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
import React from 'react';
import {NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import {MovieService} from "@/api/MovieService";
import {IResponseFilterGenre} from "#/filtersTypes";
import GenreList from "@/components/home/GenreList";

interface IHomePage {
  filters: IResponseFilterGenre
}

const Home: NextPage<IHomePage> = ({filters}) => {
  return (
    <MainLayout>
      <main>
        <GenreList genres={filters.genres}/>
      </main>
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const filters = await MovieService.getFilters()

    return {
      props: {
        filters
      }
    }
  } catch (e) {
    console.log(e)
  }
}
import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import MainLayout from "@/components/layouts/MainLayout";
import FirebaseAuthService from '@/api/FirebaseAuthService';
import {observer} from 'mobx-react-lite';
import {CollectionState} from "@/store";
import {useAuth} from "@/contexts/AuthContext";
import {IMovie} from "#/movieTypes";
import {useFetch} from "@/hooks/useFetch";
import {MovieService} from "@/api/MovieService";
import UserCardProfile from "@/components/profile/UserCardProfile";
import FavoriteMovieList from "@/components/profile/FavoriteMovieList";

interface IProfileProps {

}

const Profile: NextPage<IProfileProps> = () => {
  const {user} = useAuth()
  const collection = CollectionState.moviesToCollection
  const loadCollection = CollectionState.loading
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([])

  const [fetchFavoriteMovies, loadFavoriteMovies] = useFetch(async () => {
    const fetchingFavoriteMovies = await MovieService.getFavoriteMovies(collection)
    setFavoriteMovies(fetchingFavoriteMovies)
    console.log(fetchingFavoriteMovies)
  })

  useEffect(() => {
    if (!loadCollection && collection.length) {
      fetchFavoriteMovies()
    }
  }, [loadCollection])

  if (!user) {
    return null
  }

  return (
    <MainLayout>
      <main
        className="flex-center absolute-main min-screen px-2 md:py-0 pb-6 bg-no-repeat bg-center bg-profile bg-cover ">
        <section
          className="bg-transparent relative rounded-md overflow-hidden min-w-full md:min-w-[750px] xl:min-w-[1024px] z-10">
          <div className="absolute bg-gray-100 top-0 left-0 full opacity-20"></div>
          <div className="p-4 md:p-10 min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <UserCardProfile
              user={user}
              classNames="p-4 row-span-2 bg-white rounded-md"
            />
            <FavoriteMovieList
              classNames="bg-white p-4 rounded-md max-h-72 scrollbar-hide"
              title="Любимые фильмы"
              movies={favoriteMovies}
            />
            <div className="bg-white p-4 rounded-md">
              <div className="flex flex-col items-start space-y-4 justify-center">
                <button onClick={() => FirebaseAuthService.logout()}
                        className="btn btn-danger">Выход
                </button>
                <button className="btn btn-danger">Удаление аккаунта
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default observer(Profile);

import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {observer} from 'mobx-react-lite';
import {ParsedUrlQuery} from 'querystring';
import {useAuth} from '@/contexts';
import {CollectionState} from '@/store';
import {MainLayout} from '@/components/layouts';
import {BoxLoader} from '@/components/ui';
import {AccountControlPanel, FavoriteMovieList, UserCardProfile} from '@/components/profile';
import Seo from '@/hoc/Seo';
import {TOKEN} from "@/const";

const Profile: NextPage = () => {
  const {user} = useAuth()
  const collection = CollectionState.moviesToCollection
  const loadCollection = CollectionState.loading

  return (
    <Seo
      title={`Личный кабинет ${user?.displayName || ''}`}
      indexed={false}
    >
      <MainLayout>
        <main
          className="flex-center absolute-main min-screen px-2 md:py-0 pb-6 bg-no-repeat bg-center bg-profile bg-cover ">
          <section
            className="bg-transparent relative rounded-md overflow-hidden min-w-full md:min-w-[750px] xl:min-w-[1024px] z-10">
            <div className="absolute bg-gray-100 top-0 left-0 full opacity-20"/>
            <div className="p-4 md:p-10 min-w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <UserCardProfile
                user={user!}
                classNames="p-4 row-span-2 bg-white rounded-md"
              />
              <div className="bg-white p-4 rounded-md min-h-[200px] max-h-72 relative">
                {loadCollection ? (
                  <BoxLoader/>
                ) : (
                  <FavoriteMovieList
                    classNames="scrollbar-hide"
                    title="Любимые фильмы"
                    movies={collection}
                  />
                )}
              </div>
              <div className="bg-white p-4 rounded-md flex-center">
                <AccountControlPanel/>
              </div>
            </div>
          </section>
        </main>
      </MainLayout>
    </Seo>
  );
};

export default observer(Profile);

export const getServerSideProps: GetServerSideProps<ParsedUrlQuery> = async (context) => {
  const token = context.req.cookies[TOKEN]

  if (token) {
    return {
      props: {}
    }
  } else {
    return {
      redirect: {
        destination: '/auth/login',
        statusCode: 308
      }
    }
  }
}

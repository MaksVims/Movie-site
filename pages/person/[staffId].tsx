import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ISpecificStaff} from "#/staffTypes";
import {ParsedUrlQuery} from "querystring";
import StaffService from "@/api/StaffService";
import MainLayout from "@/components/layouts/MainLayout";
import FooterLayout from "@/components/layouts/FooterLayout";
import getUniqMoviesForPerson from "+/getUniqMoviesForPerson";
import {useEffect, useMemo} from "react";
import {MoviesState} from "@/store";
import {observer} from "mobx-react-lite";
import PersonInfo from "@/components/person/PersonInfo";
import PersonMovies from "@/components/person/PersonMovies";

interface PersonPageProps {
  person: ISpecificStaff
}

export const PersonPage: NextPage<PersonPageProps> = ({person}) => {
  const uniqMovies = useMemo(() => getUniqMoviesForPerson(person), [person])

  useEffect(() => {
    MoviesState.setMovies(uniqMovies)
    return () => MoviesState.reset()
  }, [uniqMovies])

  const filteredMovies = MoviesState.filteredMovies

  return (
    <MainLayout>
      <div className="max-w-[1024px] mx-auto full">
        <FooterLayout>
          <main
            className="bg-white mt-4 flex flex-col p-4 pb-0 space-y-10">
            <PersonInfo
              person={person}
              countMovies={uniqMovies.length}
            />
            <PersonMovies filteredMovies={filteredMovies}/>
          </main>
        </FooterLayout>
      </div>
    </MainLayout>
  )
}

export default observer(PersonPage)

interface IParamsPersonPage extends ParsedUrlQuery {
  staffId: string
}

export const getStaticProps: GetStaticProps<PersonPageProps, IParamsPersonPage> = async (ctx) => {
  const {staffId} = ctx.params!
  try {
    const person = await StaffService.getSpecificStaff(Number(staffId))

    return {
      props: {
        person
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
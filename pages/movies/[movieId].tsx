import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";

import {IResponseReviewsByMovie, IResponseTrailer, ISingleMovie, IStaffByMovie} from "types";
import {MovieService, StaffService} from "@/api";
import {Seo} from "@/hoc";
import {FooterLayout, MainLayout} from "@/components/layouts";
import {MovieCardContent, MovieCardImg, ReviewItem} from "@/components/singleMovie";


interface IMoviePageProps {
  movie: ISingleMovie,
  staff: IStaffByMovie[]
  responseReviews: IResponseReviewsByMovie
  responseTrailer: IResponseTrailer
}

const MovieId: NextPage<IMoviePageProps> = ({movie, staff, responseReviews, responseTrailer}) => {

  return (
    <Seo
      title={movie.nameRu}
      keywords={`${movie.nameRu} ${movie.genres.map(genre => genre.genre).join(',')}`}
      description={movie.description}
    >
      <MainLayout>
        <FooterLayout>
          <main
            className="mx-auto mt-4 xl:mb-10 max-w-[1024px] flex flex-col rounded-tl-md rounded-tr-md">
            <section
              className="flex flex-col md:mx-auto items-center bg-white py-6 px-2 md:flex-row md:items-start md:px-6">
              <MovieCardImg movie={movie}/>
              <MovieCardContent movie={movie} staff={staff}/>
            </section>
            <section className="pt-6 bg-white flex-1 text-center">
              <div className="px-4">
                <h2 className="font-medium mb-2 space-x-1">
                  <span>Смотреть трейлер {movie.nameRu} онлайн</span>
                  <a
                    href={`${responseTrailer.items[0].url}`}
                    target="_blank"
                    rel="noreferrer"
                    className="link-blur-color"
                  >
                    тут
                  </a>
                </h2>
              </div>
              <video
                src="#"
                controls={true}
                className="flex-1 h-[400px] w-full"
              />
              <ul className="px-2 p-4 sm:!px-4 space-y-4">
                <h2 className="text-xl font-semibold my-4">Рецензии на фильм</h2>
                {responseReviews.reviews
                  ?.filter(review => review.reviewTitle)
                  .map(review => (
                    <li key={review.reviewId}>
                      <ReviewItem review={review}/>
                    </li>
                  ))}
              </ul>
            </section>
          </main>
        </FooterLayout>
      </MainLayout>
    </Seo>

  );
};

export default MovieId;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

interface IParams extends ParsedUrlQuery {
  movieId: string
}

export const getStaticProps: GetStaticProps<IMoviePageProps, IParams> = async (context) => {
  const {movieId} = context.params!
  try {
    const movie = await MovieService.getMovieById(Number(movieId))
    const staff = await StaffService.getStaffByMovie(Number(movieId))
    const responseReviews = await MovieService.getReviewsByMovie(Number(movieId))
    const responseTrailer = await MovieService.getTrailer(Number(movieId))

    return {
      props: {
        movie,
        staff,
        responseReviews,
        responseTrailer
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
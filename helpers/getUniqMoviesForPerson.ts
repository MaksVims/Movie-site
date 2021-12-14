import {IPersonMovie} from "#/movieTypes";
import {ISpecificStaff} from "#/staffTypes";

export default function getUniqMoviesForPerson(person: ISpecificStaff) {
  const films = person.films.slice()
  const uniqFilms: { [key: string]: IPersonMovie } = {}

  films.filter(film => {
    if (uniqFilms[film.filmId]) return false
    else {
      uniqFilms[film.filmId] = film
      return true
    }
  })

  return Object.values(uniqFilms)
    .filter(film => film.nameRu && film.rating)
}
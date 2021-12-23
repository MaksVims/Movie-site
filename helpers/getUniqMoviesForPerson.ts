import { IPersonMovie, ISpecificStaff } from 'types';

export default function getUniqMoviesForPerson(person: ISpecificStaff) {
  const films = person.films.slice()
  const uniqFilms: { [key: string]: IPersonMovie } = {}

  films.filter((film) => {
    if (uniqFilms[film.filmId]) return false

    uniqFilms[film.filmId] = film
    return true
  })

  return Object.values(uniqFilms)
    .filter((film) => film.nameRu && film.rating)
}

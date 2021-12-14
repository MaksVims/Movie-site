import {IStaffByMovie} from "#/staffTypes";

export default function getActorsFromList(persons: IStaffByMovie[], limit: number) {
  const actors = persons.filter(person => {
    return person.professionKey === 'ACTOR' && person.nameRu
  }) || []

  return actors.length > limit ? actors.slice(0, limit) : actors
}

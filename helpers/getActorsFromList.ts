import {IStaffByMovie, PROFESSION_KEY} from "#/staffTypes";

export default function getActorsFromList(persons: IStaffByMovie[], limit: number): IStaffByMovie[] {
  const actors = persons.filter(person => {
    return person.professionKey === PROFESSION_KEY.ACTOR && person.nameRu
  }) || []

  return actors.length > limit ? actors.slice(0, limit) : actors
}

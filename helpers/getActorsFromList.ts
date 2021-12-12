import {IStaffByMovie, PROFESSION_KEY} from "#/staffTypes";

export default function getActorsFromList(persons: IStaffByMovie[]): IStaffByMovie[] {
  return persons.filter(person => {
    return person.professionKey === PROFESSION_KEY.ACTOR && person.nameRu
  }) || []
}

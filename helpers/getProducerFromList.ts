import {IStaffByMovie, PROFESSION_KEY} from "#/staffTypes";

export default function getProducerFromList(persons: IStaffByMovie[]): IStaffByMovie | null {
  return persons.find(person => person.professionKey === PROFESSION_KEY.PRODUCER) || null
}
import {IStaffByMovie} from "#/staffTypes";

export default function getProducerFromList(persons: IStaffByMovie[]) {
  return persons.find(person => person.professionKey === "PRODUCER") || null
}
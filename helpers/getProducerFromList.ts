import { IStaffByMovie } from 'types';

export default function getProducerFromList(persons: IStaffByMovie[]) {
  return persons.find((person) => person.professionKey === 'PRODUCER') || null
}

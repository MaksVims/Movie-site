import { TCollectionItem } from "types";

export default function isCollection(movieId: number, collection: TCollectionItem[]) {
  return !!collection.find(item => item.movieId === movieId)
}
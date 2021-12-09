import {TCollectionItem} from "#/storeTypes";

export function isCollection(movieId: number, collection: TCollectionItem[]): boolean {
  return !!collection.find(item => item.movieId === movieId)
}
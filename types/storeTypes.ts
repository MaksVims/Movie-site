export type TCollectionItem = {
  movieId: number
}

export type TypeCollection = {
  [key: string]: TCollectionItem
}

export type TypeMapRecordsToCollection = {
  [key: string]: string
}
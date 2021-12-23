export type TCollectionItem = {
  movieId: number,
  title: string
}

export type TypeCollection = {
  [key: string]: TCollectionItem
}

export type TypeMapRecordsToCollection = {
  [key: string]: string
}

import {CollectionState} from "@/store";
import {useCallback, useEffect, useState} from "react";
import {isCollection} from "+/isCollection";

export default function useMovieLike(movieId: number, title: string) {
  const collection = CollectionState.moviesToCollection
  const mapRecords = CollectionState.mapRecordsToCollection
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(isCollection(movieId, collection))
  }, [movieId, collection])

  const addMovieToCollection = useCallback(async () => {
    await CollectionState.addMovieToCollection(movieId, title)
  }, [movieId])

  const removeMovieToCollection = useCallback(async () => {
    await CollectionState.removeMovieToCollection(mapRecords[movieId])
  }, [movieId, mapRecords])

  return {isActive, addMovieToCollection, removeMovieToCollection}
}
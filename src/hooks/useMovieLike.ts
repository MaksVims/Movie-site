import {CollectionState} from "@/store";
import {useCallback, useEffect, useState} from "react";
import {isCollection} from "+/isCollection";
import {useAlert} from "@/contexts/AlertContext";
import errorsMessage from "@/const/errorsMessage";
import {AlertType} from "#/alertCtxTypes";
import successMessage from "@/const/successMessage";

export default function useMovieLike(movieId: number, title: string) {
  const collection = CollectionState.moviesToCollection
  const mapRecords = CollectionState.mapRecordsToCollection
  const [isActive, setIsActive] = useState(false)
  const {showAlert} = useAlert()

  useEffect(() => {
    setIsActive(isCollection(movieId, collection))
  }, [movieId, collection])

  const addMovieToCollection = useCallback(async () => {
    try {
      await CollectionState.addMovieToCollection(movieId, title)
      showAlert(successMessage.ADD_MOVIE_TO_COLLECTION, AlertType.SUCCESS)
    } catch {
      showAlert(errorsMessage.ADD_MOVIE_TO_COLLECTION, AlertType.ERROR)
    }
  }, [movieId])

  const removeMovieToCollection = useCallback(async () => {
    try {
      await CollectionState.removeMovieToCollection(mapRecords[movieId])
      showAlert(successMessage.REMOVE_MOVIE_TO_COLLECTION, AlertType.ERROR)
    } catch {
      showAlert(errorsMessage.REMOVE_MOVIE_TO_COLLECTION, AlertType.ERROR)
    }
  }, [movieId, mapRecords])

  return {isActive, addMovieToCollection, removeMovieToCollection}
}
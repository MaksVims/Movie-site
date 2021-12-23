import { useCallback, useEffect, useState } from 'react';
import { isCollection } from 'helpers';
import { AlertType } from 'types';
import { CollectionState } from '@/store';
import { useAlert } from '@/contexts/AlertContext';
import successMessage from '@/const/successMessage';
import { CustomError } from '@/factory/CustomError';

export default function useMovieLike(movieId: number, title: string) {
  const collection = CollectionState.moviesToCollection
  const mapRecords = CollectionState.mapRecordsToCollection
  const [isActive, setIsActive] = useState(false)
  const { showAlert } = useAlert()

  useEffect(() => {
    setIsActive(isCollection(movieId, collection))
  }, [movieId, collection])

  const addMovieToCollection = useCallback(async () => {
    try {
      await CollectionState.addMovieToCollection(movieId, title)
      showAlert(successMessage.ADD_MOVIE_TO_COLLECTION, AlertType.SUCCESS)
    } catch (e) {
      if (e instanceof CustomError) {
        showAlert(e.message, AlertType.ERROR)
      }
    }
  }, [movieId])

  const removeMovieToCollection = useCallback(async () => {
    try {
      await CollectionState.removeMovieToCollection(mapRecords[movieId])
      showAlert(successMessage.REMOVE_MOVIE_TO_COLLECTION, AlertType.ERROR)
    } catch (e) {
      if (e instanceof CustomError) {
        showAlert(e.message, AlertType.ERROR)
      }
    }
  }, [movieId, mapRecords])

  return { isActive, addMovieToCollection, removeMovieToCollection }
}

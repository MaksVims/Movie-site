import {makeAutoObservable} from "mobx";
import FirebaseCollectionService from "@/api/FirebaseCollectionService";
import firebase from "firebase/compat";
import {CustomError} from "@/factory/CustomError";
import DataSnapshot = firebase.database.DataSnapshot;
import errorsMessage from "@/const/errorsMessage";

type TCollectionItem = {
  movieId: number
}

class CollectionState {

  collection: TCollectionItem[]
  loading: boolean
  error: null | CustomError

  constructor() {
    makeAutoObservable(this)

    this.collection = []
    this.loading = false
    this.error = null
  }

  startAsyncLoad() {
    this.loading = true
    this.error = null
  }

  async loadCollection(userId: string): Promise<void> {
    try {
      this.startAsyncLoad()
      const result: DataSnapshot = await FirebaseCollectionService.loadCollection(userId)
      this.collection = Object.values(result)
    } catch {
      this.error = new CustomError(errorsMessage.LOAD_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  async addMovieToCollection(movieId: number): Promise<void> {
    try {
      this.loading = true
      await FirebaseCollectionService.addMovieToCollection(movieId)
      this.collection.push({movieId})
    } catch {
      this.error = new CustomError(errorsMessage.ADD_MOVIE_TO_COLLECTION)
    } finally {
      this.loading = false
    }
  }
}

export default new CollectionState()
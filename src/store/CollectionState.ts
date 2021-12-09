import {makeAutoObservable} from "mobx";
import FirebaseCollectionService from "@/api/FirebaseCollectionService";
import {CustomError} from "@/factory/CustomError";
import errorsMessage from "@/const/errorsMessage";
import {TCollectionItem, TypeCollection, TypeMapRecordsToCollection} from "#/storeTypes";

class CollectionState {

  collection: TypeCollection
  loading: boolean
  error: null | CustomError

  constructor() {
    this.collection = {}
    this.loading = true
    this.error = null
    makeAutoObservable(this)
  }

  startAsyncLoad() {
    this.loading = true
    this.error = null
  }

  async loadCollection(userId: string): Promise<void> {
    try {
      this.startAsyncLoad()
      const res = await FirebaseCollectionService.loadCollection(userId)
      this.collection = res === null ? {} : res
    } catch {
      this.error = new CustomError(errorsMessage.LOAD_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  async updateCollection(update: TypeCollection) {
    this.collection = update === null ? {} : update
  }

  async addMovieToCollection(movieId: number): Promise<void> {
    try {
      this.error = null
      await FirebaseCollectionService.addMovieToCollection(movieId)
    } catch {
      this.error = new CustomError(errorsMessage.ADD_MOVIE_TO_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  async removeMovieToCollection(recordId: string) {
    try {
      this.error = null
      await FirebaseCollectionService.removeMovieToCollection(recordId)
    } catch {
      this.error = new CustomError(errorsMessage.REMOVE_MOVIE_TO_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  get moviesToCollection(): TCollectionItem[] {
    return Object.values(this.collection)
  }

  get mapRecordsToCollection(): TypeMapRecordsToCollection {
    return Object.keys(this.collection).reduce((map: TypeMapRecordsToCollection, recordID: string) => {
      map[this.collection[recordID].movieId] = recordID
      return map
    }, {})
  }
}

export default new CollectionState()
import {makeAutoObservable} from "mobx";
import FirebaseCollectionService from "@/api/FirebaseCollectionService";
import {CustomError} from "@/factory/CustomError";
import errorsMessage from "@/const/errorsMessage";
import {TypeCollection, TypeMapRecordsToCollection} from "#/storeTypes";

class CollectionState {

  collection: TypeCollection
  loading: boolean

  constructor() {
    this.collection = {}
    this.loading = false
    makeAutoObservable(this)
  }

  startAsyncLoad() {
    this.loading = true
  }

  async loadCollection(userId: string) {
    try {
      this.startAsyncLoad()
      const updateResolver = this.updateCollection.bind(this)
      const res = await FirebaseCollectionService.loadCollection(userId, updateResolver)
      this.collection = res === null ? {} : res
    } catch {
      throw new CustomError(errorsMessage.LOAD_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  async updateCollection(update: TypeCollection) {
    this.collection = update === null ? {} : update
  }

  async addMovieToCollection(movieId: number, title: string) {
    try {
      await FirebaseCollectionService.addMovieToCollection(movieId, title)
    } catch {
      throw new CustomError(errorsMessage.ADD_MOVIE_TO_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  async removeMovieToCollection(recordId: string) {
    try {
      await FirebaseCollectionService.removeMovieToCollection(recordId)
    } catch {
      throw new CustomError(errorsMessage.REMOVE_MOVIE_TO_COLLECTION)
    } finally {
      this.loading = false
    }
  }

  get moviesToCollection() {
    return Object.values(this.collection)
  }

  get mapRecordsToCollection() {
    return Object.keys(this.collection)
      .reduce((map: TypeMapRecordsToCollection, recordID: string) => {
      map[this.collection[recordID].movieId] = recordID
      return map
    }, {})
  }
}

export default new CollectionState()
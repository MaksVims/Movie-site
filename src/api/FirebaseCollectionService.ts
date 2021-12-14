import {auth, db} from 'service/firebase'
import {DatabaseReference, get, onValue, push, ref, remove, set} from 'firebase/database'
import {TypeCollection} from "#/storeTypes";

type updateResolver = (update: TypeCollection) => Promise<void>

export default class FirebaseCollectionService {

  static async loadCollection(
    userId: string,
    updateResolver: updateResolver
  ) {
    const collectionListRef = ref(db, `/users/${userId}/collection`)
    await FirebaseCollectionService.createObserverUpdate(collectionListRef, updateResolver)
    return await get(collectionListRef).then(snapshot => snapshot.val())
  }

  static async createObserverUpdate(
    observeRef: DatabaseReference,
    updateResolver: updateResolver
  ) {
    onValue(observeRef, snapshot => {
      const data = snapshot.val()
      updateResolver(data)
    })
  }

  static async removeMovieToCollection(recordId: string) {
    const userId = auth.currentUser?.uid
    const collectionListItemRef = ref(db, `/users/${userId}/collection/${recordId}`)
    return await remove(collectionListItemRef)
  }

  static async addMovieToCollection(
    movieId: number,
    title: string
  ) {
    const userId = auth.currentUser?.uid
    const collectionListRef = ref(db, `/users/${userId}/collection`)
    const newCollectionItemRef = push(collectionListRef)
    await set(newCollectionItemRef, {
      movieId,
      title
    })
    return true
  }
}
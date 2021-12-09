import {auth, db} from 'service/firebase'
import {DatabaseReference, get, onValue, push, ref, remove, set} from 'firebase/database'
import {CollectionState} from "@/store";

export default class FirebaseCollectionService {

  static async loadCollection(userId: string) {
    const collectionListRef = ref(db, `/users/${userId}/collection`)
    await FirebaseCollectionService.createObserverUpdate(collectionListRef)
    return await get(collectionListRef).then(snapshot => snapshot.val())
  }

  static async createObserverUpdate(observeRef: DatabaseReference) {
    onValue(observeRef, snapshot => {
      const data = snapshot.val()
      CollectionState.updateCollection(data)
    })
  }

  static async removeMovieToCollection(recordId: string) {
    const userId = auth.currentUser?.uid
    const collectionListItemRef = ref(db, `/users/${userId}/collection/${recordId}`)
    return await remove(collectionListItemRef)
  }

  static async addMovieToCollection(movieId: number): Promise<boolean> {
    const userId = auth.currentUser?.uid
    const collectionListRef = ref(db, `/users/${userId}/collection`)
    const newCollectionItemRef = push(collectionListRef)
    await set(newCollectionItemRef, {
      movieId
    })
    return true
  }
}
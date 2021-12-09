import {auth, db} from 'service/firebase'
import {get, push, ref, set} from 'firebase/database'

export default class FirebaseCollectionService {

  static async loadCollection(userId: string) {
    const collectionListRef = ref(db, `/users/${userId}/collection`)
    return get(collectionListRef).then(snapshot => snapshot.val())
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
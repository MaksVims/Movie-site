import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "service/firebase";

export default class FirebaseAuthService {

  static async login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  static async logout() {
    return auth.signOut()
  }

  static async register(email: string, password: string, name?: string) {
    await createUserWithEmailAndPassword(auth, email, password)
    return updateProfile(auth.currentUser!, {
      displayName: name || email
    })
  }
}


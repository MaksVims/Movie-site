import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential} from "firebase/auth";
import {auth} from "service/firebase";

export default class FirebaseAuthService {

  static async login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  static async logout(): Promise<void> {
    return auth.signOut()
  }

  static async register(email: string, password: string, name?: string): Promise<void> {
    await createUserWithEmailAndPassword(auth, email, password)
    return updateProfile(auth.currentUser!, {
      displayName: name || email
    })
  }

  static isLoggedIn(): boolean {
    return !!auth.currentUser
  }

  async deleteAccount(): Promise<boolean> {
    if (auth.currentUser) {
      await auth.currentUser.delete()
      return true
    }
    return false
  }
}


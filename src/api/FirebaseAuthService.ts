import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, UserCredential} from "firebase/auth";
import {auth} from "service/firebase";
import {deleteUser, User} from "@firebase/auth";

export default class FirebaseAuthService {

  static async login(email: string, password: string): Promise<User> {
    const credential: UserCredential = await signInWithEmailAndPassword(auth, email, password)
    return credential.user
  }

  static async logout(): Promise<void> {
    return auth.signOut()
  }

  static async register(email: string, password: string, name?: string): Promise<User> {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser!, {
      displayName: name || email
    })
    return credential.user
  }

  static async updateProfile(name: string, tel: string, photoURL: string) {
    await updateProfile(auth.currentUser!, {
      displayName: name,
      photoURL,
    })
  }

  static isLoggedIn(): boolean {
    return !!auth.currentUser
  }

  static async deleteAccount(): Promise<boolean> {
    if (auth.currentUser) {
      await deleteUser(auth.currentUser)
      return true
    }
    return false
  }
}


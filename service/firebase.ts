import {FirebaseApp, getApp, getApps, initializeApp} from "@firebase/app";
import {Auth, getAuth} from "@firebase/auth";
import {Database, getDatabase} from "firebase/database";

let app: FirebaseApp

const firebaseConfig = {
  apiKey: "AIzaSyCo_XgDieSw15S0xF3Oq7ZXLs3EaflTeG4",
  authDomain: "movie-site-2c16a.firebaseapp.com",
  databaseURL: "https://movie-site-2c16a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movie-site-2c16a",
  storageBucket: "movie-site-2c16a.appspot.com",
  messagingSenderId: "575158949908",
  appId: "1:575158949908:web:25c3fe445dde431871ef01"
};

if (getApps().length) {
  app = getApp()
} else {
  app = initializeApp(firebaseConfig)
}

const auth: Auth = getAuth(app)
const db: Database = getDatabase()

export {app, auth, db}
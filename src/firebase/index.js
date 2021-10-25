import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC4JQ46ajCG54W8oPamwnBL40p4Ms9-FF0',
  authDomain: 'linkedin-clone-565b0.firebaseapp.com',
  projectId: 'linkedin-clone-565b0',
  storageBucket: 'linkedin-clone-565b0.appspot.com',
  messagingSenderId: '991954907006',
  appId: '1:991954907006:web:af284f771ae35b80a30d2f',
}

const app = initializeApp(firebaseConfig)
const app2 = firebase.initializeApp(firebaseConfig, 'app-test')
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage()

export { auth, provider, storage }
export default db

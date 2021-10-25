import { addDoc, collection, onSnapshot, orderBy, query} from '@firebase/firestore'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { setArticles, setLoadingStatus } from '../redux/articleSlice'
import { setUser } from '../redux/userSlice'
import db, { auth, provider, storage } from './index'

export const signInGogle = () => (dispatch) => {
  signInWithPopup(auth, provider)
    .then(result => dispatch(setUser(result.user)))
    .catch(error => {
      console.log(GoogleAuthProvider.credentialFromError(error))
    })
}

export const getUserAuth = () => {
  return (dispatch) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        dispatch(setUser(user))
      }
    })
  }
}

export const signOutAPI = () => {
  return (dispatch) => {
    console.log('hola desde signout');
    signOut(auth)
      .then(() => dispatch(setUser(null)))
      .catch(err => console.error(err.message))
  }
}



export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(setLoadingStatus(true))

    if (payload?.image != null) {
      const imageRef = ref(storage, `images/${payload?.image.name}`)
      const upload = uploadBytesResumable(imageRef, payload?.image)
      upload.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          console.log(`Progress: ${progress}`)

          if (snapshot.state === 'running') console.log(`Progress: ${progress}%`)
        },
        error => console.log(error.code),

        async () => {
          addDoc(collection(db, 'articles'), {
            user: {
              description: payload?.user.email,
              title: payload?.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: await getDownloadURL(imageRef),
            comments: 0,
            description: payload.description,
          })

          dispatch(setLoadingStatus(false))
        }
      )
    } else if (payload.video) {
      addDoc(collection(db, 'articles'), {
        user: {
          description: payload?.user.email,
          title: payload?.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: '',
        comments: 0,
        description: payload.description,
      })
      dispatch(setLoadingStatus(false))
    }
  }
}

export const getArticlesAPI = () => {
  return (dispatch) => {
    let payload

    const q = query(collection(db, 'articles'), orderBy('user.date', 'desc'))
    onSnapshot(q, snapshot => {
      payload = snapshot.docs.map(doc => doc.data())
      console.log(payload)
      dispatch(setArticles(payload))
    })
  }
}

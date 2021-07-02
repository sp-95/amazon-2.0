import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCLjEk3o7JSYeJ2_QmnD77yMpZihaTUs30',
  authDomain: 'amzn-clone-21116.firebaseapp.com',
  projectId: 'amzn-clone-21116',
  storageBucket: 'amzn-clone-21116.appspot.com',
  messagingSenderId: '626840006795',
  appId: '1:626840006795:web:d8a2039ea6b84f490ee48e',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db

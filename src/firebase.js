import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDAk9lUTKEEZcG_un_l6SejV0lI8NknjkQ",
    authDomain: "drive-clone-a0f8b.firebaseapp.com",
    projectId: "drive-clone-a0f8b",
    storageBucket: "drive-clone-a0f8b.appspot.com",
    messagingSenderId: "333717209172",
    appId: "1:333717209172:web:78aded30c690fe561fadc1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const db = firebaseApp.firestore();

  export { auth, provider, db, storage };

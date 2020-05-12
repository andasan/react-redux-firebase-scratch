import firebase  from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD56CkG_Z_OjPSbX2cf-e5gakqhiEFOvQs",
    authDomain: "boologu-8244a.firebaseapp.com",
    databaseURL: "https://boologu-8244a.firebaseio.com",
    projectId: "boologu-8244a",
    storageBucket: "boologu-8244a.appspot.com",
    messagingSenderId: "875849300373",
    appId: "1:875849300373:web:9ccc412a4a1c3bca481e9c"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
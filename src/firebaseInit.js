import firebase from 'firebase/app'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyAXBih4mzuK1ODpIJLYF2ZD9DnCby9o46s",
    authDomain: "moviebase-2ee1b.firebaseapp.com",
    databaseURL: "https://moviebase-2ee1b.firebaseio.com",
    projectId: "moviebase-2ee1b",
    storageBucket: "moviebase-2ee1b.appspot.com",
    messagingSenderId: "274826680021",
    appId: "1:274826680021:web:8626b925a83f8db2e3745c",
    measurementId: "G-K2W74EMWB6"
  };
const app = firebase.initializeApp(firebaseConfig)

export default app;


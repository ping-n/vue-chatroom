import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXyLRDWTeOdaEpgqcj3RP7PmQ0BQCb4nk",
  authDomain: "vue-chatroom-6bc34.firebaseapp.com",
  databaseURL: "https://vue-chatroom-6bc34.firebaseio.com",
  projectId: "vue-chatroom-6bc34",
  storageBucket: "vue-chatroom-6bc34.appspot.com",
  messagingSenderId: "552190940891",
  appId: "1:552190940891:web:0e195f8b86067085299efe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

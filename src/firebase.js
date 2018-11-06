import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDUKl_fbvJlUqy-RYySiP03jDhKC89QKOo",
  authDomain: "wildbattle-1e46c.firebaseapp.com",
  databaseURL: "https://wildbattle-1e46c.firebaseio.com",
  projectId: "wildbattle-1e46c",
  storageBucket: "wildbattle-1e46c.appspot.com",
  messagingSenderId: "340803107917"
}
firebase.initializeApp(config);
export default firebase;
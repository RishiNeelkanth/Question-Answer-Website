import firebase from "firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyDG2mnrOkS0tafAjU1SqzXfaJS7AMKMSMg",
//   authDomain: "quora-clone-akky.firebaseapp.com",
//   projectId: "quora-clone-akky",
//   storageBucket: "quora-clone-akky.appspot.com",
//   messagingSenderId: "902318949999",
//   appId: "1:902318949999:web:8df2b97a20eece0209ef9a",
//   measurementId: "G-LJBYVXT22Z",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const db = firebaseApp.firestore();

// export { auth, provider };
// export default db;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
apiKey: "AIzaSyDO1wjW-wiXbjJP5-gWHuCGy7fjnq7Anmc",
authDomain: "qa-site-485e1.firebaseapp.com",
projectId: "qa-site-485e1",
  storageBucket: "qa-site-485e1.appspot.com",
  messagingSenderId: "835356496647",
  appId: "1:835356496647:web:f2bf718b924f6b35806ba2",
  measurementId: "G-133MVPN0WV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
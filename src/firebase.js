import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDx1fmQvMnXZsUdxDJZFNmabuY9BKFHCT0",
	authDomain: "netflix-vw.firebaseapp.com",
	projectId: "netflix-vw",
	storageBucket: "netflix-vw.appspot.com",
	messagingSenderId: "269109907141",
	appId: "1:269109907141:web:1d7ee12f293b26b63b2aac",
	measurementId: "G-GBRLLZTFEN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };

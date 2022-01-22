import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB1hqbgB8h8bGIiOl7KGa8AVu7JKLQWUP4",
    authDomain: "crwn-db-51769.firebaseapp.com",
    projectId: "crwn-db-51769",
    storageBucket: "crwn-db-51769.appspot.com",
    messagingSenderId: "408192406731",
    appId: "1:408192406731:web:57b6f698ba6ef9a5d1374e",
    measurementId: "G-S8V0N2LFGV"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);
    
    if (!snapShot?.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
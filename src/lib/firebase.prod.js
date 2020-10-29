import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Need to somehow seed the database

//Need a config here
const config = {
    apiKey: 'AIzaSyCpNAPtUD6CDPvySWn1-FnIjYJMCfuldiE',
    authDomain: 'netflix-94f3a.firebaseapp.com',
    databaseURL: 'https://netflix-94f3a.firebaseio.com',
    projectId: 'netflix-94f3a',
    storageBucket: 'netflix-94f3a.appspot.com',
    messagingSenderId: '562543380691',
    appId: '1:562543380691:web:3dcd5504096f06add42c26'
};

const firebase = Firebase.initializeApp(config);

export {firebase};
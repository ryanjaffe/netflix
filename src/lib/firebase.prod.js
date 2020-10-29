import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Need to somehow seed the database

//Need a config here
const config = {};

const firebase = Firebase.initializeApp(config);

export {firebase};
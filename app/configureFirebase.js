import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBGtZOd18-chJbeIumEVICKMF0WSBdNxKA',
  authDomain: 'netflix-bd7bb.firebaseapp.com',
  projectId: 'netflix-bd7bb',
  storageBucket: 'netflix-bd7bb.appspot.com',
  messagingSenderId: '223600904036',
  appId: '1:223600904036:web:aec9ca0e64045dc7835c71',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

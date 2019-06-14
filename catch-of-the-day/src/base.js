import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvYt1q0o-wiA57tI_kMEBic-sIH3iEMwk",
  authDomain: "catch-of-the-day-espidesigns.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-espidesigns.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export
export default base;
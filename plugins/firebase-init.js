import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import env from 'config';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: env.FIREBASE.API_KEY,
    authDomain: `${env.FIREBASE.PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${env.FIREBASE.DATABASE_NAME}.firebaseio.com`,
    projectId: env.FIREBASE.PROJECT_ID,
    storageBucket: `${env.FIREBASE.PROJECT_ID}.appspot.com`,
    messagingSenderId: env.FIREBASE.SENDER_ID,
    appId: env.FIREBASE.APP_ID,
    measurementId: env.FIREBASE.MEASURMENT_ID,
  });
}

export default (context, inject) => {
  inject('firebase', firebase);
  inject('db', firebase.firestore());
  inject('auth', firebase.auth());
};

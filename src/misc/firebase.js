import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDrBFJ4wtLbFLdpr5tXU-EJXF-UsqDmfhM',
  authDomain: 'chat-web-app-c5d3c.firebaseapp.com',
  databaseURL: 'https://chat-web-app-c5d3c.firebaseio.com',
  projectId: 'chat-web-app-c5d3c',
  storageBucket: 'chat-web-app-c5d3c.appspot.com',
  messagingSenderId: '168818218524',
  appId: '1:168818218524:web:6b78011dae7da7431271d9',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDMAd5hYPnAVB_wr7DWCLQNpAd_ZN5qjX0",
    authDomain: "restaurantapp-6eba7.firebaseapp.com",
    databaseURL: "https://restaurantapp-6eba7-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-6eba7",
    storageBucket: "restaurantapp-6eba7.appspot.com",
    messagingSenderId: "897301281874",
    appId: "1:897301281874:web:f15e025d53624c7175738b"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage};
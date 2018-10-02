import firebase from 'firebase';

const CONFIG_FIREBASE = {
    apiKey: "AIzaSyB22XPD0y3SaT0LS4mkag6nS6m3dWdDAzc",
    authDomain: "react-firebase-9b207.firebaseapp.com",
    databaseURL: "https://react-firebase-9b207.firebaseio.com",
    projectId: "react-firebase-9b207",
    storageBucket: "",
};

export default firebaseApp = firebase.initializeApp(CONFIG_FIREBASE);
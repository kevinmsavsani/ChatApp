import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6_gm4FA8wcfbd6UJtZxYnJND6J7QExOY",
    authDomain: "chatapp-9d45b.firebaseapp.com",
    databaseURL: "https://chatapp-9d45b.firebaseio.com",
    projectId: "chatapp-9d45b",
    storageBucket: "chatapp-9d45b.appspot.com",
    messagingSenderId: "506091625205",
    appId: "1:506091625205:web:31bf33808b5d010b21c3bc",
    measurementId: "G-2JJ7JRD606"
};
firebase.initializeApp(config);

export default firebase;
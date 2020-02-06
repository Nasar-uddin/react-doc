import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6OB2kcqjPyPkiAMbvgOxI7Qz3ewBid2w",
    authDomain: "react-bdea7.firebaseapp.com",
    databaseURL: "https://react-bdea7.firebaseio.com",
    projectId: "react-bdea7",
    storageBucket: "react-bdea7.appspot.com",
    messagingSenderId: "165182820877",
    appId: "1:165182820877:web:526bd6e427031a66befb44"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
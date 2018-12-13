import firebase from 'react-native-firebase';
// import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

 const config = {
    apiKey: "AIzaSyA1PeaTXXPtFtXYzuVwMMEaDmPo-7lWL1U",
    authDomain: "shop-app-fea96.firebaseapp.com",
    databaseURL: "https://shop-app-fea96.firebaseio.com",
    projectId: "shop-app-fea96",
    storageBucket: "shop-app-fea96.appspot.com",
    messagingSenderId: "66488367200"
  };
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
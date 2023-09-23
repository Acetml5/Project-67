import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBVHDC_ArOGlP5Tm6sgsEMKG6EGWJXCji8",
    authDomain: "project-67-8b254.firebaseapp.com",
    projectId: "project-67-8b254",
    storageBucket: "project-67-8b254.appspot.com",
    messagingSenderId: "690755396775",
    appId: "1:690755396775:web:8930a7ff9bc789a5066782"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
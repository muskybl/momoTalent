const firebase = require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyAbqdz4fejLkDx6_ky3k_XEcPe2EkYEYU4",
    authDomain: "momotalent-33f11.firebaseapp.com",
    databaseURL: "https://momotalent-33f11.firebaseio.com",
    projectId: "momotalent-33f11",
    storageBucket: "momotalent-33f11.appspot.com",
    messagingSenderId: "962088512482",
    appId: "1:962088512482:web:f8da658f80abee29f8e7bb",
    measurementId: "G-X6B3SDZD8R"
};
firebase.initializeApp(firebaseConfig)
const database = firebase.database()
database.ref().set({
    name : 'hello'
})
//lt --port 8000
//Esto seria para la parte del admin
const admin = require('firebase-admin');
var serviceAccount = require('./serviceAccountKey.json');


const firebase = require('firebase');


//Crear un server con expressjs
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});


//Modelos que utilizare despues
var modelos = require("./modelo");



// var db = admin.firestore();
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://angular-electronV2.firebaseio.com"

// });

var config = {
    apiKey: "AIzaSyAxqG0JEVGTDONQDmBEZrwrnByCsBJHpLo",
    authDomain: "angular-electronV2.firebaseapp.com",
    databaseURL: "https://angular-electronV2.firebaseio.com",
    storageBucket: "angular-electronV2.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();

const test = require("./test/test");
test.test(app);
test.users(app);

const newUser = require('./Loggin/loggin.firebase');
newUser.createUser(app, firebase)
newUser.loggin(app, firebase);
newUser.loggout(app, firebase);
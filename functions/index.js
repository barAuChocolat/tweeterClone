const functions = require("firebase-functions");

const app = require("express")();

const FBauth = require('./util/FBauth');

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/user');

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

firebase.initializeApp(firebaseConfig);

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBauth, postOneScream);

// log route
app.post("/signup", signup);
app.post("/login", login);



exports.api = functions.region("europe-west1").https.onRequest(app);

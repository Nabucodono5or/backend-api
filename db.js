const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const config = require("./config");

const appFirebase = initializeApp({ credential: cert(config.serviceAccount) });
const db = getFirestore(appFirebase);

module.exports = db;

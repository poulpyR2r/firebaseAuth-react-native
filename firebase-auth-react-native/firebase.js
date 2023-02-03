import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Mo5nXXVC0poCWQKj8DzGm5ImJdAsXsQ",
  authDomain: "authremakefood.firebaseapp.com",
  projectId: "authremakefood",
  storageBucket: "authremakefood.appspot.com",
  messagingSenderId: "487223222755",
  appId: "1:487223222755:web:9a8766cbe2a1245a48c0d6",
  measurementId: "G-VKYD65MHCB"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };


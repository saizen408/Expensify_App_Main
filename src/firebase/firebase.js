import * as firebase from "firebase";
import "firebase/analytics";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(expense => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("notes/-LyLroVszgVXnXKMraOd").remove();

// database.ref("expenses").push({
//   description: "electricity bill",
//   note: "too high",
//   amount: 67990,
//   createdAt: 199203
// });

// database.ref("notes").push({
//   title: "Course topics",
//   body: "React Native, Angular, Python"
// });

// database.ref("notes").set(notes);

// const onValueChange = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("error with fetching", e);
//   }
// );

// database.ref().on("value", snapshot => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// });

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database
//   .ref()
//   .set({
//     name: "Eric Owusu",
//     age: 36,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     stressLevel: 6,
//     isSingle: false,
//     location: {
//       city: "Portland",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("data is saved!");
//   })
//   .catch(e => {
//     console.log("this failed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("data removed");
//   })
//   .catch(e => {
//     console.log("did not remove data", e);
//   });

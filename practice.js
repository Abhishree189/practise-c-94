
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDEKtfqmn4YRhwNWiFISVCgK4yo3F546OY",
    authDomain: "kwitter-web-app-f6082.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-f6082-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-f6082",
    storageBucket: "kwitter-web-app-f6082.appspot.com",
    messagingSenderId: "477023314892",
    appId: "1:477023314892:web:4ce30b718fe49f1b8b3369"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  function addUser(){
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  purpose = "addUser"
});

  }
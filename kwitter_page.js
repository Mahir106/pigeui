var firebaseConfig = {
    apiKey: "AIzaSyBXG1I2T9JbY-utdFgmGEhtyPPkNuVZvpU",
    authDomain: "kwitter-project-d8a1c.firebaseapp.com",
    databaseURL: "https://kwitter-project-d8a1c-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-d8a1c",
    storageBucket: "kwitter-project-d8a1c.appspot.com",
    messagingSenderId: "648894243640",
    appId: "1:648894243640:web:a70b69a30b6df8607b57cd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          meesage : msg,
          like : 0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

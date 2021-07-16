// Your web app's Firebase configuration
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
    document.getElementById("user_name").innerHTML = "welcome " + user_name  + "!";

    function add_room(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding user name"
      });
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";
      }
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname -"+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname", name);
  window.location = "kwitter_page.html";
}

function log_out(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
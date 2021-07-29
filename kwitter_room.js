var firebaseConfig = {
      apiKey: "AIzaSyB0gfCVUSJTmduixrCpJ7iHEqTz2-Ncudo",
      authDomain: "kwitter-289e2.firebaseapp.com",
      databaseURL: "https://kwitter-289e2-default-rtdb.firebaseio.com",
      projectId: "kwitter-289e2",
      storageBucket: "kwitter-289e2.appspot.com",
      messagingSenderId: "472639841097",
      appId: "1:472639841097:web:2404d4e7b440d98c323098",
      measurementId: "G-88RVJ4PCK9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - ", Room_names);
      row = "<div class= 'room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)' >#"+ Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function redirectToRoomName()
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

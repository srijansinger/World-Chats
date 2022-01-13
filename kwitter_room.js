
var firebaseConfig = {
      apiKey: "AIzaSyBOV3cg-9br-PdvhpGxZT3ITbB_uJrUFQc",
      authDomain: "world-chats-101b9.firebaseapp.com",
      databaseURL: "https://world-chats-101b9-default-rtdb.firebaseio.com",
      projectId: "world-chats-101b9",
      storageBucket: "world-chats-101b9.appspot.com",
      messagingSenderId: "761291126689",
      appId: "1:761291126689:web:6f9a374bbaa19a4970bde0",
      measurementId: "G-LL27GRKWSM"
    };
    
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Username");
document.getElementById("usa").innerHTML = "Welcome " + username;

function addroom(){
roomname = document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({purpose:"adding user"});

localStorage.setItem("ROOMNAME",roomname);
window.location = "kwitter_page.html";
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       Room_names = childKey; console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name) { console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html"; 
}

function logout() {
 localStorage.removeItem("Username");
 localStorage.removeItem("room_name");
  window.location = "index.html";
 }























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

    room_name = localStorage.getItem("room_name");
    document.getElementById("rn").innerHTML = room_name + "🤟🤘!";
    user_name = localStorage.getItem("Username");


function sb(){
      msg = document.getElementById("in").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });

document.getElementById("in").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


         console.log(firebase_message_id); console.log(message_data);
          name = message_data['name'];
           message = message_data['message'];
            like = message_data['like']; 
            name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
             message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
              like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
               span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();


function updateLike(message_id) {
       console.log("clicked on like button - " + message_id);
 button_id = message_id;
  likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
    console.log(updated_likes);
 firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); 
}

function log() {
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
       window.location = "index.html";
      }
     















import './CreateGame.css';
import React, { useState,useEffect,useRef } from 'react';
import socket from './Socket';


const CreateGame=()=> {
  //const [userName,setUserName] = useState("");
  //const [roomName,setRoomName] = useState("");

 const enviar = (userName,roomName)=>{
   socket.emit('Juego', roomName, userName);
  }

  
  return (
       <div className="App"> 
        <header class="join-header">
          <h1><i class="fas fa-dice">Parchís</i> </h1>
        </header>
      <div class="join-container">
        <main class="join-main">
          <form action="chat.html">
            <div class="form-control">
              <label for="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                //value = {userName} onChange={userName=>setUserName(userName.target.value)}
              />
              <label for="username">Room Name</label>
              <input
                type="text"
                name="roomname"
                id="roomname"
                required
                //value = {roomName} onChange={roomName=>setRoomName(roomName.target.value)}
              />
              
            </div>
            {/* <div class="form-control">
              <label for="room">Room</label>
              <select name="room" id="room">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
              </select>
  </div> */}
            <button type="submit" class="btn" onClick={capturar}>Create Game</button>
          </form>
        </main>
      </div>
    </div>
  );
  function capturar(){
    var nombreUsuario = document.getElementById("username").value;
    var nombreRoom = document.getElementById("roomname").value;
    enviar(nombreUsuario,nombreRoom);
  }
}

export default CreateGame;
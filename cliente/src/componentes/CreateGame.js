import './CreateGame.css';
import React from 'react';
import { useNavigate } from "react-router-dom"
import socket from './Socket';

const CreateGame=()=> {
  const history = useNavigate();
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
            <div class="form-control">
              <label for="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                required
              />
              <label for="username">Room Name</label>
              <input
                type="text"
                name="roomname"
                id="roomname"
                required
              />
              <label for="players">Cantidad de jugadores</label>
              <select name="cantRoom" id="cantRoom">
                <option value="2">2</option>
                <option value="4">4</option>
              </select>
            <button type="submit" class="btn" onClick={capturar}>Create Game</button>
            </div>
        </main>
      </div>
    </div>
  );

  function capturar(){
    var nombreUsuario = document.getElementById("username").value;
    var nombreRoom = document.getElementById("roomname").value;
    
    if(document.getElementById("username").value.length > 0 && document.getElementById("roomname").value.length > 0){
      if(document.getElementById("cantRoom").value == 2){
        enviar(nombreUsuario,nombreRoom);
        history("/waitingRoom2");
      }else{
        enviar(nombreUsuario,nombreRoom);
        history("/waitingRoom4");
      }
    }
  }
}

export default CreateGame;
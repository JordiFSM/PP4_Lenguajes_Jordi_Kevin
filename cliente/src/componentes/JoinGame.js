import './CreateGame.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import socket from './Socket';


const JoinGame=()=> {
  const [namerooms, nameroomsSet] = useState([]);
  const history = useNavigate();
  let options = namerooms.map((namerooms) => <option key={namerooms.name}>{namerooms.name}</option>);
  
  const getList = () =>{
    socket.emit('Selector');
  }

  const validarRoom = (nombreUsuario,nombreRoom,idRoom)=>{
    socket.emit('validarRoom', nombreUsuario, nombreRoom,idRoom);
  }

  socket.on('Refresh',roomNames=>{
    nameroomsSet(roomNames);
  })

  socket.on("Usuario unido 1", infoRoom=>{
    history("/waitingRoom2");
  })

  socket.on("Usuario unido 2",infoRoom=>{
    history("/waitingRoom4");
  })

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
              />
            </div>
            <div class="form-control">
              <label for="room">Room</label>
              <select name="room" id="room" onClick={getList}>
                {
                  options
                  }
              </select>
            </div> 
            <div class="form-control">
              <label for="username">Id Room</label>
              <input
                type="text"
                name="roomId"
                id="roomId"
                required
              />
            </div>
            <button type="submit" class="btn" onClick={capturarJugador}>Join Game</button>
          </form>
        </main>
      </div>
    </div>
  );
  function capturarJugador(){
    var nombreUsuario = document.getElementById("username").value;
    var nombreRoom = document.getElementById("room").value;
    var idRoom = document.getElementById("roomId").value;
    if(document.getElementById("username").value.length > 0 && document.getElementById("roomId").value.length > 0  && document.getElementById("room").value.length > 0){
        
        //history("/waitingRoom4");
        validarRoom(nombreUsuario,nombreRoom,idRoom);
    }
  }
}
export default JoinGame;
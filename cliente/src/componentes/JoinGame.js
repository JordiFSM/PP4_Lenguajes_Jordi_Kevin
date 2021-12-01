import './CreateGame.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import React, { useState } from 'react';
import socket from './Socket';

//objetivo: Se encarga de crear la ventana de de Join game para la pagina web
//entrada: NA
//salida: La ventana de Join Game
//restricciones: NA
const JoinGame=()=> {
  const [namerooms, nameroomsSet] = useState([]);
  const history = useNavigate();
  let options = namerooms.map((namerooms) => <option key={namerooms.name}>{namerooms.name}</option>);
  
  //objetivo: Se encarga enviar la lista de salas disponibles para que esta sea actualizada.
  const getList = () =>{
    socket.emit('Selector');
  }

  //objetivo: Se encarga enviar la informacion del jugador que se quiere unir para que sea validada en el servidor.
  const validarRoom = (nombreUsuario,nombreRoom,idRoom)=>{
    socket.emit('validarRoom', nombreUsuario, nombreRoom,idRoom);
  }

  //objetivo: Se encarga de recibir la informacion de la lista de salas para refrescarla 
  socket.on('Refresh',roomNames=>{
    nameroomsSet(roomNames);
  })

  //objetivo: Se encarga de recibir la informacion de la sala de espera de 2 jugadores para el jugador 2 para seguidamente crearla
  socket.on('sala espera 2', (user1,user2,name,idr) =>{
    history("/waitingRoom2/"+user1+","+user2+","+idr+","+name);
  })
  //objetivo: Se encarga de recibir la informacion de la sala de espera de 4 jugadores para el jugador 2 para seguidamente crearla
  socket.on('sala espera 2.1', (user1,name,idr) =>{
    history("/waitingRoom4/"+user1 +","+idr+","+name);
  })
  //objetivo: Se encarga de recibir la informacion de la sala de espera de 4 jugadores para el jugador 3 para seguidamente crearla
  socket.on('sala espera 3', (user1,name,idr) =>{
    history("/waitingRoom4/"+user1 +","+idr+","+name);
  })
  //objetivo: Se encarga de recibir la informacion de la sala de espera de 4 jugadores para el jugador 4 para seguidamente crearla
  socket.on('sala espera 4', (user1,name,idr) =>{
    history("/waitingRoom4/"+user1 +","+idr+","+name);
  })

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
        </main>
      </div>
    </div>
  );
  //objetivo: Se encarga de capturar el click del boton para obtener los valores indicados por el usuario y mandarlo a validar
  //entrada: NA
  //salida: Enviar la informacion del usuario que se quiere unir a una sala
  //restricciones: El username, el roomid y el nombre de la room no pueden estar vacios
  function capturarJugador(){
    var nombreUsuario = document.getElementById("username").value;
    var nombreRoom = document.getElementById("room").value;
    var idRoom = document.getElementById("roomId").value;
    if(document.getElementById("username").value.length > 0 && document.getElementById("roomId").value.length > 0  && document.getElementById("room").value.length > 0){
        validarRoom(nombreUsuario,nombreRoom,idRoom);
    }
  }
}
export default JoinGame;
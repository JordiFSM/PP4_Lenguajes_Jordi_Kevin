import './CreateGame.css';
import React from 'react';
import { useNavigate } from "react-router-dom"
import socket from './Socket';

//objetivo: Se encarga de crear la ventana de create game
//entrada: NA
//salida: La ventana de create game
//restricciones: NA
const CreateGame=()=> {
  const history = useNavigate();

 //objetivo: Se encarga de enviar la informacion de la sala creada al servidor
 const enviar = (userName,roomName,cantJugadores)=>{
   socket.emit('Juego', roomName, userName,cantJugadores);
  }

  //objetivo: Se encarga recibir la informacion de la sala ya validada de 2 jugadores para posteriormente crearla
  socket.on('Crear sala 2', (user1, user2, idroom, sala,num)=>{
    history("/waitingRoom2/"+user1+","+user2+","+idroom+","+sala+","+num);
  })
  //objetivo: Se encarga recibir la informacion de la sala ya validada de 4 jugadores para posteriormente crearla
  socket.on('Crear sala 4', (nombre,user2, idroom, sala,num)=>{
    history("/waitingRoom4/"+nombre+","+idroom+","+sala+","+num);
  })
  
  //objetivo: Se encarga de crear la ventana de create game 
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
                <option >2</option>
                <option >4</option>
              </select>
            <button type="submit" class="btn" onClick={capturar}>Create Game</button>
            </div>
        </main>
      </div>
    </div>
  );

  //objetivo: Se encarga de capturar la informacion indicada por el usuario para seguidamente enviarla a validar
  //entrada: NA
  //salida: Enviar la informacion de la sala a crear al servidor
  //restricciones: El username y el roomname no pueden estar vacios
  function capturar(){
    var nombreUsuario = document.getElementById("username").value;
    var nombreRoom = document.getElementById("roomname").value;
    var cantJugadores = document.getElementById("cantRoom").value;
    if(document.getElementById("username").value.length > 0 && document.getElementById("roomname").value.length > 0){
      if(document.getElementById("cantRoom").value == 2){
        enviar(nombreUsuario,nombreRoom,cantJugadores);
      }else{
        enviar(nombreUsuario,nombreRoom,cantJugadores);
      }
    }
  }
}
export default CreateGame;
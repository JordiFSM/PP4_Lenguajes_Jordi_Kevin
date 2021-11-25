import './CreateGame.css';
import React, { useState, useEffect } from 'react';
import socket from './Socket';


const JoinGame=()=> {
  const [namerooms, nameroomsSet] = useState([]);
  let options = namerooms.map((namerooms) => <option key={namerooms}>{namerooms}</option>);

  const getList = () =>{
    socket.emit('Selector');
  }

  socket.on('Refresh',roomNames=>{
    nameroomsSet(roomNames);
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
                name="username"
                id="username"
                required
              />
            </div>
            <button type="submit" class="btn" >Join Game</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default JoinGame;
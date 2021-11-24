import './CreateGame.css';
import React from 'react';

const JoinGame=()=> {
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
              <select name="room" id="room">
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="PHP">PHP</option>
                <option value="C#">C#</option>
                <option value="Ruby">Ruby</option>
                <option value="Java">Java</option>
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
            <button type="submit" class="btn">Join Game</button>
          </form>
        </main>
      </div>
    </div>
  );
}

export default JoinGame;
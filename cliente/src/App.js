import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import socket from './componentes/Socket';
import "./App.css"
import CreateGame from "./componentes/CreateGame";
import JoinGame from "./componentes/JoinGame";
import Tablero from "./componentes/Tablero";
import WaitingRoom4 from "./componentes/WaitingRoom4";
import WaitingRoom2 from "./componentes/WaitingRoom2";


function App() {
  socket.emit('conectado',"hola desde cliente");
  return (
    <Router>
      <div className="navBar"> 
        <div className="btn_group">
        <NavLink to="/createGame" className="btn2">
          Create Game
        </NavLink>
        <NavLink to="/joinGame" className="btn2" activeClassName="active">
          Join Game
        </NavLink>
      </div>
      <hr/>
      <Routes>
        <Route exact path="/createBoard" element={<Tablero/>}/>
        <Route exact path="/joinGame" element={<JoinGame/>}/>
        <Route exact path="/createGame" element={<CreateGame/>}/>
        <Route exact path="/waitingRoom2/:idRoom" element={<WaitingRoom2/>}/>
        <Route exact path="/waitingRoom4" element={<WaitingRoom4/>}/>
      </Routes>
      </div>
    </Router>  
  );
}


export default App;

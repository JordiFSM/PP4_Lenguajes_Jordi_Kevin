import React, { useState } from 'react';
import { useParams} from "react-router-dom";
import socket from './Socket';
import "./WaitingRoom.css";
import "./CreateGame.css";

const WaitingRoom2 = () =>{
    let {idRoom} = useParams();
    let id = idRoom.valueOf().split(",");
    const [jugador2, jugador2Set] = useState("Esperando..");

    socket.on('Jugador 2 unido', (nombre, id2)=>{
        if (id2 == id[1]){
            jugador2Set(nombre);
        }
    })

    console.log(id[1]) ;
    if(id[3] == '1'){
        return(
            <div className="Body">
                <header class="headerWR">
                    <h1><i >SALA DE ESPERA</i> </h1>
                    <h2  className="infoRoom">RoomName: {id[2]} </h2>
                    <h2 className="infoRoom">IdRoom: {id[1]} </h2>
                    <div className="usersContainer2">
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{id[0]}</h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador2}</h1>
                        </div>
                        <button type="submit" class="btnUnirJuego" onClick={empezarJuego} >Unirse a Juego</button>
                    </div>
                </header>
            </div>
        )
    }else{
        return(
            <div className="Body">
                <header class="headerWR">
                    <h1><i >SALA DE ESPERA</i> </h1>
                    <h2  className="infoRoom">RoomName: {id[2]} </h2>
                    <h2 className="infoRoom">IdRoom: {id[1]} </h2>
                    <div className="usersContainer2">
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{id[0]}</h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador2}</h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
    function empezarJuego(){
        
    }
    
}

export default WaitingRoom2;
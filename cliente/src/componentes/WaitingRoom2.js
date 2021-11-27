import React from 'react';
import { useNavigate } from "react-router-dom";
import socket from './Socket';
import "./WaitingRoom.css";
import "./CreateGame.css";

const WaitingRoom2 = () =>{
    const history = useNavigate();
    const id = null;
    return(
        <div className="Body">
            <header class="headerWR">
                <h1><i >SALA DE ESPERA</i> </h1>
                <h2  className="infoRoom">RoomName: </h2>
                <h2 className="infoRoom">IdRoom: </h2>
                <div className="usersContainer2">
                    <div className="perfil">
                        <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                        <h1 className="userName">Jordis</h1>
                    </div>
                    <div className="perfil">
                        <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                        <h1 className="userName">Jordis</h1>
                    </div>
                </div>
            </header>
        </div>
    )
    
}

export default WaitingRoom2;
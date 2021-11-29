import React, { useState } from 'react';
import { useParams} from "react-router-dom";
import socket from './Socket';
import { useNavigate } from "react-router-dom"
import "./WaitingRoom.css";
import "./CreateGame.css";


const WaitingRoom4 = () =>{
    const history = useNavigate();
    let {parametros} = useParams();
    let param = parametros.valueOf().split(",");
    const [jugador2, jugador2Set] = useState("Esperando..");
    const [jugador3, jugador3Set] = useState("Esperando..");
    const [jugador4, jugador4Set] = useState("Esperando..");

    socket.on('Jugador 2.1 unido', (nombre, id2)=>{
        if (id2 == param[1]){
            jugador2Set(nombre);
        }
    })

    socket.on('Jugador 3 unido', (nombre,nombre2, id2)=>{
        if (id2 == param[1]){
            jugador2Set(nombre2);
            jugador3Set(nombre);
        }
    })

    socket.on('Jugador 4 unido', (nombre,nombre2,nombre3,id2)=>{
        if (id2 == param[1]){
            jugador2Set(nombre3);
            jugador3Set(nombre2);
            jugador4Set(nombre);
        }
    })
    if(param[3] == '1'){
        return(
            <div className="Body">
                <header class="headerWR">
                    <h1><i >SALA DE ESPERA</i> </h1>
                    <h2  className="infoRoom">RoomName:{param[2]} </h2>
                    <h2 className="infoRoom">IdRoom: {param[1]} </h2>
                    <div className="usersContainer4">
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{param[0]} </h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador2}</h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador3}</h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador4}</h1>
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
                    <h2  className="infoRoom">RoomName:{param[2]} </h2>
                    <h2 className="infoRoom">IdRoom: {param[1]} </h2>
                    <div className="usersContainer4">
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{param[0]} </h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador2}</h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador3}</h1>
                        </div>
                        <div className="perfil">
                            <img className="avatarP" src="https://c0.klipartz.com/pngpicture/536/90/gratis-png-logo-negro-iconos-de-computadora-usuario-perfil-login-avatar-descripcion.png" />
                            <h1 className="userName">{jugador4}</h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

    function empezarJuego(){
        if(jugador4 != "Esperando.."){
            history("/tablero/");
            socket.emit("Juego Iniciado");
        }
    }
}
export default WaitingRoom4;
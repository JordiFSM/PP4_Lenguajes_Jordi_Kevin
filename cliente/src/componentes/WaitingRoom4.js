import React, { useState } from 'react';
import { useParams} from "react-router-dom";
import socket from './Socket';
import { useNavigate } from "react-router-dom"
import "./WaitingRoom.css";
import "./CreateGame.css";

//objetivo: Se encarga de crear la sala de espera de 4 jugadores
//entrada: NA
//salida: La ventana de sala de espera de 4 jugadores
//restricciones: NA
const WaitingRoom4 = () =>{
    const history = useNavigate();
    let {parametros} = useParams();
    let param = parametros.valueOf().split(",");
    const [jugador2, jugador2Set] = useState("Esperando..");
    const [jugador3, jugador3Set] = useState("Esperando..");
    const [jugador4, jugador4Set] = useState("Esperando..");

    //objetivo: Se encarga de recibir la informacion del jugador 2 para ingresarlo en la sala de espera de 4 jugadores
    socket.on('Jugador 2.1 unido', (nombre, id2)=>{
        if (id2 == param[1]){
            jugador2Set(nombre);
        }
    })
    //objetivo: Se encarga de recibir la informacion del jugador 3 para ingresarlo en la sala de espera de 4 jugadores
    socket.on('Jugador 3 unido', (nombre,nombre2, id2)=>{
        if (id2 == param[1]){
            jugador2Set(nombre2);
            jugador3Set(nombre);
        }
    })
    //objetivo: Se encarga de recibir la informacion del jugador 4 para ingresarlo en la sala de espera de 4 jugadores
    socket.on('Jugador 4 unido', (nombre,nombre2,nombre3,id2)=>{
        if (id2 == param[1]){
            jugador2Set(nombre3);
            jugador3Set(nombre2);
            jugador4Set(nombre);
        }
    })
    //objetivo: Se encarga de recibir la informacion del id de la sala para crear el tablero de 4 jugadores
    socket.on('Tablero4', (id2)=>{
        if (id2 == param[1]){
            history("/tablero2/"+param[1]+",A");
        }
    })

    //objetivo: Se encarga de crear la sala de espera si es el jugador 1 se le habilita el boton de iniciar juego si no lo es solo se le habilita la sala de espera
    if(param[3] == '1'){
        return(
            <div className="Body">
                <header class="headerWR">
                    <h1><i >SALA DE ESPERA</i> </h1>
                    <h2  className="infoRoom">RoomName:{param[2]} </h2>
                    <h2 className="infoRoom">IdRoom: {param[1]} </h2>
                    <button type="submit" class="btnUnirJuego" onClick={empezarJuego} >Unirse a Juego</button>
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

    //objetivo: Se encarga de capturar el click del boton iniciar juego
    //entrada: NA
    //salida: Enviar la informacion de la sala de espera al servidor para que este inicie el juego
    //restricciones: La sala debe de estar llena para poder realizar esta funcion
    function empezarJuego(){
        if(jugador4 != "Esperando.."){
            socket.emit("Sala tablero 4 llena",param[1], param[0], jugador2,jugador3,jugador4);
        }
    }
}
export default WaitingRoom4;
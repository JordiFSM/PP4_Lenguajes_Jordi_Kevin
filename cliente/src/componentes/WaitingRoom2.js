import React, { useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import socket from './Socket';
import "./WaitingRoom.css";
import "./CreateGame.css";

//objetivo: Se encarga de crear la sala de espera de 2 jugadores
//entrada: NA
//salida: La ventana de sala de espera de 2 jugadores
//restricciones: NA
const WaitingRoom2 = () =>{
    const history = useNavigate();
    let {idRoom} = useParams();
    let id = idRoom.valueOf().split(",");
    const [jugador2, jugador2Set] = useState("Esperando..");

    //objetivo: Se encarga de recibir la informacion del jugador 2 para ingresarlo en la sala de espera e 2 jugadores
    socket.on('Jugador 2 unido', (nombre, id2)=>{
        if (id2 == id[2]){
            jugador2Set(nombre);
        }
    })

    //objetivo: Se encarga de recibir la informacion del id de la sala para crear el tablero de 2 jugadores
    socket.on('Tablero2', (id2)=>{
        if (id2 == id[2]){
            history("/tablero2/"+id[2]+",A");
        }
    })

    //objetivo: Se encarga de crear la sala de espera si es el jugador 1 se le habilita el boton de iniciar juego si no lo es solo se le habilita la sala de espera
    if(id[4] == '1'){
        return(
            <div className="Body">
                <header class="headerWR">
                    <h1><i >SALA DE ESPERA</i> </h1>
                    <div> 
                        <h2  className="infoRoom">RoomName: {id[3]} </h2>
                        <h2 className="infoRoom">IdRoom: {id[2]} </h2>
                        <button type="submit" class="btnUnirJuego" onClick={empezarJuego} >Unirse a Juego</button>
                    </div>
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
    }else{
        return(
            <div className="Body">
                <header class="headerWR">
                    <h1><i >SALA DE ESPERA</i> </h1>
                    <h2  className="infoRoom">RoomName: {id[3]} </h2>
                    <h2 className="infoRoom">IdRoom: {id[2]}</h2>
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

    //objetivo: Se encarga de capturar el click del boton iniciar juego
    //entrada: NA
    //salida: Enviar la informacion de la sala de espera al servidor para que este inicie el juego
    //restricciones: La sala debe de estar llena para poder ealizar esta funcion
    function empezarJuego(){
        if(jugador2 != "Esperando.."){
            socket.emit("sala tablero 2 llena", id[2], id[0], jugador2);
        }
    }
    
}

export default WaitingRoom2;
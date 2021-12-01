const express = require('express');
const { ftruncateSync } = require('fs');
const http = require('http');
const app = express();
const servidor = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(servidor);
let roomNames = [];


io.on('connection', socket =>{
    
    //objetivo: Recibe la informacion de la sala de 2 jugadores de un tablero que esta lista para iniciar y manda dicha informacion a todos los clientes
    socket.on("sala tablero 2 llena", (idR, user1, user2) =>{
        io.emit('Tablero2', idR);
        io.emit('setJugador1', user1, idR);
        io.emit('setJugador2', user2, idR);
    })
    //objetivo: Recibe la informacion de la sala de 4 jugadores de un tablero que esta lista para iniciar y manda dicha informacion a todos los clientes
    socket.on("Sala tablero 4 llena", (idR, user1, user2,user3,user4) =>{
        io.emit('Tablero4', idR);
        io.emit('setJugador1', user1, idR);
        io.emit('setJugador2.1', user2, idR);
        io.emit('setJugador3', user3,user2, idR);
        io.emit('setJugador4', user4,user3,user2, idR);
    })
    //objetivo: Recibe la informacion de que un usuario se conecto y la muestra en la consola del servidor
    socket.on('conectado', ()=>{
        console.log("Usuario conectado");
    })

    //objetivo: Recibe la solicitud para enviar la nueva lista de salas a los clientes
    socket.on('Selector', ()=>{
        io.emit('Refresh', roomNames);
    })

    //objetivo: Recibe la informacion de una sala de juego para crear la sala en un objeto, meterla en una lista y mandar la informacion de dicha sala a todos los clientes para su creacion
    socket.on('Juego',(roomName, userName,cantJugadores)=>{
        const  idR = idRandom();
        const partida = {
            name:roomName,
            id: idR,
            user1:userName,
            user2:"NO",
            user3:null,
            user4:null,
            cantJug:cantJugadores,
            getName:function(){
                return roomName;
            }
        };
        roomNames.push(partida);
        if(partida.cantJug == '2'){
            io.emit('Crear sala 2', userName,"",idR, roomName,'1');
            io.emit('Refresh', roomNames);
        }else{
            io.emit('Crear sala 4', userName,"",idR, roomName,'1');
            io.emit('Refresh', roomNames);
        }
    }) 

    //objetivo: Crear un numero entero positivo de manera aleatoria
    //entrada: NA
    //salida: Un numero entero positivo
    //restricciones: NA
    function idRandom() {
        return Math.floor(Math.random() * (10000 - 1)) + 1
    }

    //objetivo: Recibe la informacion del usario que se quiere unir a la sala y si esta informacion coincide dicho jugador sera insertado en el objeto y en la sala
    socket.on('validarRoom',(nombreUsuario, nombreRoom,idRoom)=>{
        let cont =0;
        while(roomNames.length-1 >= cont){
            if(roomNames[cont].cantJug == '2'){
                if(roomNames[cont].name == nombreRoom){
                    if(roomNames[cont].id == idRoom){
                        if(roomNames[cont].user2 == "NO"){
                            roomNames[cont].user2 = nombreUsuario;
                            io.emit("sala espera 2",roomNames[cont].user1,roomNames[cont].user2,roomNames[cont].name,roomNames[cont].id);
                            io.emit("Jugador 2 unido",roomNames[cont].user2,roomNames[cont].id);
                           }else{
                            io.emit("Sala LLena");
                        }
                    }else{
                        io.emit("Id Incorrecto");
                    }
                }
            }else{
                if(roomNames[cont].name == nombreRoom){
                    if(roomNames[cont].id == idRoom){
                        if(roomNames[cont].user2 == "NO"){
                            roomNames[cont].user2 = nombreUsuario;
                            io.emit("sala espera 2.1",roomNames[cont].user1,roomNames[cont].name,roomNames[cont].id);
                            io.emit("Jugador 2.1 unido",roomNames[cont].user2,roomNames[cont].id);
                        }else{
                            if(roomNames[cont].user3 == null){
                                roomNames[cont].user3 = nombreUsuario;
                                io.emit("sala espera 3",roomNames[cont].user1,roomNames[cont].name,roomNames[cont].id);
                                io.emit("Jugador 3 unido",roomNames[cont].user3,roomNames[cont].user2,roomNames[cont].id);
                            }else{
                                if(roomNames[cont].user4 == null){
                                    roomNames[cont].user4 = nombreUsuario;
                                    io.emit("sala espera 4",roomNames[cont].user1,roomNames[cont].name,roomNames[cont].id);
                                    io.emit("Jugador 4 unido",roomNames[cont].user4,roomNames[cont].user3,roomNames[cont].user2,roomNames[cont].id);
                                }else{
                                io.emit('Partida Llena');
                                }
                            }
                        }
                    }else{
                        io.emit("Id Incorrecto");
                    }
                }
            }
        cont++;
        }
    })
});
servidor.listen(3000, ()=> console.log("Servidor inicializado"));
const express = require('express');
const { ftruncateSync } = require('fs');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(servidor);
let roomNames = [];

io.on('connection', socket =>{

    

    socket.on("sala tablero 2 llena", (idR, user1, user2) =>{
        io.emit('Tablero2', idR);
        io.emit('setJugador1', user1, idR);
        io.emit('setJugador2', user2, idR);
    })

    socket.on('conectado', ()=>{
        console.log("Usuario conectado");
    })

    socket.on('Selector', ()=>{
        io.emit('Refresh', roomNames);
    })

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
    function idRandom() {
        return Math.floor(Math.random() * (10000 - 1)) + 1
    }

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
                        if(roomNames[cont].user2 == null){
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
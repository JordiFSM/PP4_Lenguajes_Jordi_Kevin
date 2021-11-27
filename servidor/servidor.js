const express = require('express');
const { ftruncateSync } = require('fs');
const http = require('http');
const app = express();
const servidor = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(servidor);
let roomNames = [];

io.on('connection', socket =>{

    
    socket.on('conectado', ()=>{
        console.log("Usuario conectado");
        
    })

    socket.on('Selector', ()=>{
        io.emit('Refresh', roomNames);
    })

    socket.on('Juego',(roomName, userName,cantJugadores)=>{
        const partida = {
            name:roomName,
            id:idRandom(),
            user1:userName,
            user2:null,
            user3:null,
            user4:null,
            cantJug:cantJugadores,
            getName:function(){
                return roomName;
            }
        };
        roomNames.push(partida);
        io.emit('Refresh', roomNames);
        console.log(roomNames[0])
        console.log(roomNames[1])
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
                        if(roomNames[cont].user2 == null){
                            roomNames[cont].user2 = nombreUsuario;
                            io.emit("Usuario unido 1",roomNames[cont]);
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
                            io.emit("Usuario unido 2",roomNames[cont]);
                        }else{
                            if(roomNames[cont].user3 == null){
                                roomNames[cont].user3 = nombreUsuario;
                                io.emit("Usuario unido 2",roomNames[cont]);
                            }else{
                                if(roomNames[cont].user4 == null){
                                    roomNames[cont].user4 = nombreUsuario;
                                    io.emit("Usuario unido 2",roomNames[cont]);
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
        console.log(roomNames[0])
        console.log(roomNames[1])
    })
});
servidor.listen(3000, ()=> console.log("Servidor inicializado"));
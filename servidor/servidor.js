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
    socket.on('Juego',(userName,roomName)=>{
        io.emit('Juego', {userName,roomName});
        console.log('Juego',userName,roomName);
        roomNames.push(roomName);
    })
    console.log(roomNames[0]); //Prueba de que si se guarda en la lista
    console.log(roomNames[1]); //Prueba de que si se guarda en la lista   
});

servidor.listen(3000, ()=> console.log("Servidor inicializado"));
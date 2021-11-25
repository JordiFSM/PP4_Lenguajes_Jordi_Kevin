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

    socket.on('Juego',(roomName, userName)=>{
        roomNames.push(roomName);
        io.emit('Refresh', roomNames);
        console.log(roomNames[0])
        console.log(roomNames[1])
    }) 
});

servidor.listen(3000, ()=> console.log("Servidor inicializado"));
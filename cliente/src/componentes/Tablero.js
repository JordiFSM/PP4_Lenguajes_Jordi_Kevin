import React, { useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import socket from './Socket';
import './Tablero.css';

//objetivo: Se encarga de crear el tablero
//entrada: NA
//salida: La ventana del tablero
//restricciones: NA

const Tablero =() =>{
  const history = useNavigate();
  let {parametros} = useParams();
  let id = parametros.valueOf().split(",");
  const [jugador1, jugador1Set] = useState("");
  const [jugador2, jugador2Set] = useState("");
  const [jugador3, jugador3Set] = useState("");
  const [jugador4, jugador4Set] = useState("");

  //objetivo: Se encarga de cambiar la informacion del jugador 1 para ponerlo en el tablero ya sea de 2 o 4 jugadores
  socket.on('setJugador1', (nombre, id2)=>{
    if (id2 === id[0]){
        jugador1Set(nombre);
    }
  })

  //objetivo: Se encarga de cambiar la informacion del jugador 2 para ponerlo en el tablero del tablero de 2 jugadores
  socket.on('setJugador2', (nombre, id2)=>{
    if (id2 === id[0]){
        jugador2Set(nombre);
    }
  })

  //objetivo: Se encarga de cambiar la informacion del jugador 2 para ponerlo en el tablero del tablero de 4 jugadores
  socket.on('setJugador2.1', (nombre, id2)=>{
    if (id2 === id[0]){
        jugador2Set(nombre);
    }
  })

  //objetivo: Se encarga de cambiar la informacion del jugador 3 para ponerlo en el tablero del tablero de 4 jugadores
  socket.on('setJugador3', (nombre,user2, id2)=>{
    if (id2 === id[0]){
        jugador3Set(nombre);
        jugador2Set(user2);
    }
  })

  //objetivo: Se encarga de cambiar la informacion del jugador 4 para ponerlo en el tablero del tablero de 4 jugadores
  socket.on('setJugador4', (nombre,user3,user2, id2)=>{
    if (id2 === id[0]){
        jugador4Set(nombre);
        jugador3Set(user3);
        jugador2Set(user2);
    }
  })

  //objetivo: Se encarga de crear el tablero
  return (
    <div>
      <h1>Tablero de parchis</h1>
      <table border="1px">
      
        <tr>
          <td class="amarillo" colspan="7" rowspan="7">{jugador1}</td> 
          <td colspan="2"><button class="am">1</button></td>
          <td colspan="2"><button class="am">68</button></td> 
          <td colspan="2"><button class="am">67</button></td> 
          <td class="verde" colspan="7" rowspan="7">{jugador3}</td>
        </tr>

        <tr>
          <td colspan="2"><button class="am">2</button></td>
          <td class="amarillo" colspan="2">-</td>
          <td colspan="2"><button class="am">66</button></td>
        </tr>

        <tr>
          <td colspan="2"><button class="am">3</button></td>
          <td class="amarillo" colspan="2">-</td>
          <td colspan="2"><button class="am">65</button></td>
        </tr>

        <tr>
          <td colspan="2"><button class="am">4</button></td>
          <td class="amarillo" colspan="2">-</td>
          <td colspan="2"><button class="am">64</button></td>
        </tr>

        <tr>
          <td class="amarillo" colspan="2"><button class="botonAmarillo">5</button></td>
          <td class="amarillo" colspan="2">-</td>
          <td colspan="2"><button class="am">63</button></td>
        </tr>

        <tr>
          <td colspan="2"><button class="am">6</button></td>
          <td class="amarillo" colspan="2">-</td>
          <td colspan="2"><button class="am">62</button></td>
        </tr>

        <tr>
          <td colspan="2"><button class="am">7</button></td>
          <td class="amarillo" colspan="2">-</td>
          <td colspan="2"><button class="am">61</button></td>
        </tr>
        
        <tr>
          <td rowspan="2"><button class="am">16</button></td>
          <td rowspan="2"><button class="am">15</button></td>
          <td rowspan="2"><button class="am">14</button></td>
          <td rowspan="2"><button class="am">13</button></td>
          <td rowspan="2"><button class="am">12</button></td>
          <td rowspan="2"><button class="am">11</button></td>
          <td rowspan="2"><button class="am">10</button></td>
          <td id="vacio"></td>
          <td><button class="am">8</button></td>
          <td>-</td>
          <td>-</td>
          <td><button class="am">60</button></td>
          <td id="vacio"></td>
          <td rowspan="2"><button class="am">58</button></td>
          <td rowspan="2"><button class="am">57</button></td>
          <td class="verde" rowspan="2"><button class="botonVerde">56</button></td>
          <td rowspan="2"><button class="am">55</button></td>
          <td rowspan="2"><button class="am">54</button></td>
          <td rowspan="2"><button class="am">53</button></td>
          <td rowspan="2"><button class="am">52</button></td>
        </tr>
    
        <tr>
          <td><button class="am">9</button></td>
          <td colspan="4" rowspan="4"><img src="https://www.trecebits.com/wp-content/uploads/2016/12/colores.jpg" /></td>
          <td><button class="am">59</button></td>
        </tr>
      
        <tr>
          <td rowspan="2"><button class="am">17</button></td>
          <td class="azul" rowspan="2">|</td>
          <td class="azul" rowspan="2">|</td>
          <td class="azul" rowspan="2">|</td>
          <td class="azul" rowspan="2">|</td>
          <td class="azul" rowspan="2">|</td>
          <td class="azul" rowspan="2">|</td>
          <td>|</td>
          <td>|</td>
          <td class="verde" rowspan="2">|</td>
          <td class="verde" rowspan="2">|</td>
          <td class="verde" rowspan="2">|</td>
          <td class="verde" rowspan="2">|</td>
          <td class="verde" rowspan="2">|</td>
          <td class="verde" rowspan="2">|</td>
          <td rowspan="2"><button class="am">51</button></td>
        </tr>
        
        <tr>
          <td>|</td>
          <td>|</td>
        </tr>
      
        <tr>
          <td rowspan="2"><button class="am">18</button></td>
          <td rowspan="2"><button class="am">19</button></td>
          <td rowspan="2"><button class="am">20</button></td>
          <td rowspan="2"><button class="am">21</button></td>
          <td class="azul" rowspan="2"><button class="botonAzul">22</button></td>
          <td rowspan="2"><button class="am">23</button></td>
          <td rowspan="2"><button class="am">24</button></td>
          <td><button class="am">25</button></td>
          <td><button class="am">43</button></td>
          <td rowspan="2"><button class="am">44</button></td>
          <td rowspan="2"><button class="am">45</button></td>
          <td rowspan="2"><button class="am">46</button></td>
          <td rowspan="2"><button class="am">47</button></td>
          <td rowspan="2"><button class="am">48</button></td>
          <td rowspan="2"><button class="am">49</button></td>
          <td rowspan="2"><button class="am">50</button></td>
        </tr>
        
        <tr>
          <td id="vacio"></td>
          <td><button class="am">26</button></td>
          <td>-</td>
          <td>-</td>
          <td><button class="am">42</button></td>
          <td id="vacio"></td>
        </tr>
        
        <tr>
          <td class="azul" colspan="7" rowspan="7">{jugador4}</td>
          <td colspan="2"><button class="am">27</button></td>
          <td class="rojo" colspan="2">-</td>
          <td colspan="2"><button class="am">41</button></td>
          <td class="rojo" colspan="7" rowspan="7">{jugador2}</td>
        </tr>
      
        <tr>
          <td colspan="2"><button class="am">28</button></td>
          <td class="rojo" colspan="2">-</td>
          <td colspan="2"><button class="am">40</button></td>
        </tr>
      
        <tr>
          <td colspan="2"><button class="am">29</button></td>
          <td class="rojo" colspan="2">-</td>
          <td class="rojo" colspan="2"><button class="botonRojo">39</button></td>
        </tr>
        
        <tr>
          <td colspan="2"><button class="am">30</button></td>
          <td class="rojo" colspan="2">-</td>
          <td colspan="2"><button class="am">38</button></td>
        </tr>
        
        <tr>
          <td colspan="2"><button class="am">31</button></td>
          <td class="rojo" colspan="2">-</td>
          <td colspan="2"><button class="am">37</button></td>
        </tr>

        <tr>
          <td colspan="2"><button class="am">32</button></td>
          <td class="rojo" colspan="2">-</td>
          <td colspan="2"><button class="am">36</button></td>
        </tr>
      
        <tr>
          <td colspan="2"><button class="am">33</button></td>
          <td colspan="2"><button class="am">34</button></td>
          <td colspan="2"><button class="am">35</button></td>
        </tr>
      </table>
  </div>
  );
}

export default Tablero;
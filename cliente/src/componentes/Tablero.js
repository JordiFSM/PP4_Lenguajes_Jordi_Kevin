import './Tablero.css';
import React from 'react';

const Tablero=()=> {
  return (
    <div className = "App">
    <h1>Tablero de parchis</h1>
    <table border="1px">
    
      <tr>
        <td class="amarillo" colspan="7" rowspan="7"></td>
        <td colspan="2"><button class="am">1</button></td>
        <td colspan="2">68</td>
        <td colspan="2">67</td>
        <td class="verde" colspan="7" rowspan="7"></td>
      </tr>

      <tr>
        <td colspan="2">2</td>
        <td class="amarillo" colspan="2">-</td>
        <td colspan="2">66</td>
      </tr>

      <tr>
        <td colspan="2">3</td>
        <td class="amarillo" colspan="2">-</td>
        <td colspan="2">65</td>
      </tr>

      <tr>
        <td colspan="2">4</td>
        <td class="amarillo" colspan="2">-</td>
        <td colspan="2">64</td>
      </tr>

      <tr>
        <td class="amarillo" colspan="2">5</td>
        <td class="amarillo" colspan="2">-</td>
        <td colspan="2">63</td>
      </tr>

      <tr>
        <td colspan="2">6</td>
        <td class="amarillo" colspan="2">-</td>
        <td colspan="2">62</td>
      </tr>

      <tr>
        <td colspan="2">7</td>
        <td class="amarillo" colspan="2">-</td>
        <td colspan="2">61</td>
      </tr>

      <tr>
        <td rowspan="2">16</td>
        <td rowspan="2">15</td>
        <td rowspan="2">14</td>
        <td rowspan="2">13</td>
        <td rowspan="2">12</td>
        <td rowspan="2">11</td>
        <td rowspan="2">10</td>
        <td id="vacio"></td>
        <td>8</td>
        <td>-</td>
        <td>-</td>
        <td>60</td>
        <td id="vacio"></td>
        <td rowspan="2">58</td>
        <td rowspan="2">57</td>
        <td class="verde" rowspan="2">56</td>
        <td rowspan="2">55</td>
        <td rowspan="2">54</td>
        <td rowspan="2">53</td>
        <td rowspan="2">52</td>
      </tr>
    
      <tr>
        <td>9</td>
        <td>59</td>
      </tr>
      
      <tr>
        <td rowspan="2">17</td>
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
        <td rowspan="2">51</td>
      </tr>

      <tr>
        <td>|</td>
        <td>|</td>
      </tr>

      <tr>
        <td rowspan="2">18</td>
        <td rowspan="2">19</td>
        <td rowspan="2">20</td>
        <td rowspan="2">21</td>
        <td class="azul" rowspan="2">22</td>
        <td rowspan="2">23</td>
        <td rowspan="2">24</td>
        <td>25</td>
        <td>43</td>
        <td rowspan="2">44</td>
        <td rowspan="2">45</td>
        <td rowspan="2">46</td>
        <td rowspan="2">47</td>
        <td rowspan="2">48</td>
        <td rowspan="2">49</td>
        <td rowspan="2">50</td>
      </tr>

      <tr>
        <td id="vacio"></td>
        <td>26</td>
        <td>-</td>
        <td>-</td>
        <td>42</td>
        <td id="vacio"></td>
      </tr>

      <tr>
        <td class="azul" colspan="7" rowspan="7"></td>
        <td colspan="2">27</td>
        <td class="rojo" colspan="2">-</td>
        <td colspan="2">41</td>
        <td class="rojo" colspan="7" rowspan="7"></td>
      </tr>
    
      <tr>
        <td colspan="2">28</td>
        <td class="rojo" colspan="2">-</td>
        <td colspan="2">40</td>
      </tr>

      <tr>
        <td colspan="2">29</td>
        <td class="rojo" colspan="2">-</td>
        <td class="rojo" colspan="2">39</td>
      </tr>

      <tr>
        <td colspan="2">30</td>
        <td class="rojo" colspan="2">-</td>
        <td colspan="2">38</td>
      </tr>

      <tr>
        <td colspan="2">31</td>
        <td class="rojo" colspan="2">-</td>
        <td colspan="2">37</td>
      </tr>
    
      <tr>
        <td colspan="2">32</td>
        <td class="rojo" colspan="2">-</td>
        <td colspan="2">36</td>
      </tr>
    
      <tr>
        <td colspan="2">33</td>
        <td colspan="2">34</td>
        <td colspan="2">35</td>
      </tr>

    </table>
  </div>
  );
}

export default Tablero;
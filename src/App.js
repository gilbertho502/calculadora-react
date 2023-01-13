import './App.css';
import { Boton } from './components/Boton'
import { Clear } from './components/Clear';
import { Pantalla } from './components/Pantalla';
import { useState } from 'react';
import {evaluate} from 'mathjs'
import {Titulo} from './components/Titulo'

function App() {

  const[entrada, setEntrada] = useState('')

  const agregarEntrada = valor => {
    setEntrada(entrada + valor)
  }

  const calcular = ()=>{
    if (entrada){
    setEntrada(evaluate(entrada))
    }
    else{
    alert("Ingresa un valor")
    }
  }

  return (
    <div className="App">

      <Titulo/>
       
       <div className='contenedor-calculadora'>

        <Pantalla input={entrada}/>

        <div className='fila'>
          <Boton manejarClic={agregarEntrada}>1</Boton>
          <Boton manejarClic={agregarEntrada}>2</Boton>
          <Boton manejarClic={agregarEntrada}>3</Boton>
          <Boton manejarClic={agregarEntrada}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarEntrada}>4</Boton>
          <Boton manejarClic={agregarEntrada}>5</Boton>
          <Boton manejarClic={agregarEntrada}>6</Boton>
          <Boton manejarClic={agregarEntrada}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarEntrada}>7</Boton>
          <Boton manejarClic={agregarEntrada}>8</Boton>
          <Boton manejarClic={agregarEntrada}>9</Boton>
          <Boton manejarClic={agregarEntrada}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={agregarEntrada}>0</Boton>
          <Boton manejarClic={agregarEntrada}>.</Boton>
          <Boton manejarClic={agregarEntrada}>/</Boton>
        </div>
        <div className='fila'>
          <Clear manejarClear={()=> setEntrada('')}>Limpiar</Clear>
        </div>
       </div>
    </div>
  );
}

export default App;

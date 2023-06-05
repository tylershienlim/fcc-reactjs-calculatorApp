import React from 'react'
import { useState } from 'react'
import * as Math from 'mathjs'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState([0]);
  let displayList = [];
  
  const handleButton = (e) => {
    e.preventDefault();
    if (e.target.value === "AC") {
      displayList.length = 0;
      setDisplay([0]);
      console.log(display);
    } else {
      if (display[0] === 0 ) {
        setDisplay([e.target.value]);
      } else {
        setDisplay(oldArray => [...oldArray, e.target.value]);
      }
    }
    console.log(display);
  }

  return (
    <div className='calculatorFrame'>
        <div id='display' className='calculatorDisplay'>
          <div id='display'>{display}</div>
        </div>
        <div className='calculatorButtons'>
          <div>
            <button className='Clear' value="AC" onClick={handleButton}>AC</button>
            <button className='Operator' id='divide' value="/">÷</button>
          </div>
          
          <div>
            <button id='seven' value="7" onClick={handleButton}>7</button>
            <button id='eight' value="8" onClick={handleButton}>8</button>
            <button id='nine' value="9" onClick={handleButton}>9</button>
            <button className='Operator' id='multiply' value="*">×</button>
          </div>

          <div>
            <button id='four' value="4" onClick={handleButton}>4</button>
            <button id='five' value="5" onClick={handleButton}>5</button>
            <button id='six' value="6" onClick={handleButton}>6</button>
            <button className='Operator' id='subtract' value="-">-</button>
          </div>

          <div>
            <button id='one' value="1" onClick={handleButton}>1</button>
            <button id='two' value="2" onClick={handleButton}>2</button>
            <button id='three' value="3" onClick={handleButton}>3</button>
            <button className='Operator' id='add' value="+">+</button>
          </div>

          <div>
            <button className='Zero' value="0" onClick={handleButton}>0</button>
            <button id='decimal' value="." onClick={handleButton}>.</button>
            <button className='Operator' id='equals' value="=">=</button>
          </div>
        </div>
    </div>
  )
}

export default Calculator;
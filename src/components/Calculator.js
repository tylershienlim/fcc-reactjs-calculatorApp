import React from 'react'
import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState([0]);
  const [decimal, setDecimal] = useState(false);
  const [formula, setFormula] = useState([0]);
  
  const handleButton = (e) => {
    console.log(decimal);
    e.preventDefault();
    if (e.target.value === "AC") {
      //resets decimal to false so decimal can be used again
      setDecimal(false);
      setDisplay([0]);
      setFormula([0]);
    } else {
      if (display[0] === 0) {
        //calculator cannot start with multiple zeros
        if (e.target.value === "0"){
          return;
        } else {
          setDisplay([e.target.value]);
          setFormula([e.target.value]);
        }
      } else { 
        setDisplay(oldArray => [...oldArray, e.target.value]);
        setFormula(oldArray => [...oldArray, e.target.value]);
      }
    }
  }

  const handleEquals = (e) => {
    e.preventDefault();
    let result = eval(formula.join(""));
    setFormula([result]);
    setDisplay([result]);
  }

  return (
    <div className='calculatorFrame'>
        <div className='calculatorDisplay'>
          <div id='display'>{display}</div>
        </div>
        <div className='calculatorButtons'>
          <div>
            <button id='clear' className='Clear' value="AC" onClick={handleButton}>AC</button>
            <button className='Operator' id='divide' value="/" onClick={handleButton}>÷</button>
          </div>
          
          <div>
            <button id='seven' value="7" onClick={handleButton}>7</button>
            <button id='eight' value="8" onClick={handleButton}>8</button>
            <button id='nine' value="9" onClick={handleButton}>9</button>
            <button className='Operator' id='multiply' value="*" onClick={handleButton}>×</button>
          </div>

          <div>
            <button id='four' value="4" onClick={handleButton}>4</button>
            <button id='five' value="5" onClick={handleButton}>5</button>
            <button id='six' value="6" onClick={handleButton}>6</button>
            <button className='Operator' id='subtract' value="-" onClick={handleButton}>-</button>
          </div>

          <div>
            <button id='one' value="1" onClick={handleButton}>1</button>
            <button id='two' value="2" onClick={handleButton}>2</button>
            <button id='three' value="3" onClick={handleButton}>3</button>
            <button className='Operator' id='add' value="+" onClick={handleButton}>+</button>
          </div>

          <div>
            <button id='zero' className='Zero' value="0" onClick={handleButton}>0</button>
            <button id='decimal' value="." >.</button>
            <button className='Operator' id='equals' value="=" onClick={handleEquals}>=</button>
          </div>
        </div>
    </div>
  )
}

export default Calculator;
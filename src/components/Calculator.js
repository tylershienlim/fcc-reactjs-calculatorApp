import React from 'react'
import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState([0]);
  const [decimal, setDecimal] = useState(false);
  const [formula, setFormula] = useState([]);
  const [lastUsed, setLastUsed] = useState("");
  const isOperator = /[-+x/]/;
  const ops = /[+x/]/;
  
  
  const handleClear = () => {
    setDecimal(false);
    setLastUsed("");
    setDisplay([0]);
    setFormula([]);
  }
  
  const handleDecimal = (e) => {
    if (!decimal) {
      setFormula(oldArray => [...oldArray, e.target.value]);
      setDisplay(oldArray => [...oldArray, e.target.value]);
      setDecimal(true);
    }
  }

  const handleOperator = (e) => {
    //if lastUsed is either (+, *, /), change lastUsed in formula to that operator
    if (ops.test(lastUsed)){
      setFormula((oldArray) => {
        const newArray = [...oldArray];
        newArray[newArray.length - 1] = e.target.value;
        return newArray;
      });
    } else {
      setFormula(oldArray => [...oldArray, e.target.value]);
    }
    setDisplay([e.target.value]);
    setLastUsed(e.target.value);
    setDecimal(false);
  }

  const handleZero = (e) => {
      if (display[0] === 0) {
        return;
      } else { 
        if (isOperator.test(lastUsed)){
          setDisplay([e.target.value]);
        } else {
          setDisplay(oldArray => [...oldArray, e.target.value]);
        }
        setFormula(oldArray => [...oldArray, e.target.value]);
    }
  }

  const handleButton = (e) => {
    if (decimal) {
      setDisplay(oldArray => [...oldArray, e.target.value]);
      setFormula(oldArray => [...oldArray, e.target.value]);
    } else {
      if (isOperator.test(lastUsed)) {
        setDisplay([e.target.value]);
        setFormula(oldArray => [...oldArray, e.target.value]);
      } else {
        if (display[0] === 0) {
          setDisplay([e.target.value]);
          setFormula([e.target.value]);
        } else {
          setDisplay(oldArray => [...oldArray, e.target.value]);
          setFormula(oldArray => [...oldArray, e.target.value]);
        }
      }
    }
    setLastUsed(e.target.value);
  }

  const handleEquals = () => {
    if (isOperator.test(lastUsed)){
      formula.pop();
    }
    let result = parseFloat(eval(formula.join("")).toFixed(7));
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
            <button id='clear' className='Clear' value="AC" onClick={handleClear}>AC</button>
            <button className='Operator' id='divide' value="/" onClick={handleOperator}>÷</button>
          </div>
          
          <div>
            <button id='seven' value="7" onClick={handleButton}>7</button>
            <button id='eight' value="8" onClick={handleButton}>8</button>
            <button id='nine' value="9" onClick={handleButton}>9</button>
            <button className='Operator' id='multiply' value="*" onClick={handleOperator}>×</button>
          </div>

          <div>
            <button id='four' value="4" onClick={handleButton}>4</button>
            <button id='five' value="5" onClick={handleButton}>5</button>
            <button id='six' value="6" onClick={handleButton}>6</button>
            <button className='Operator' id='subtract' value="-" onClick={handleOperator}>-</button>
          </div>

          <div>
            <button id='one' value="1" onClick={handleButton}>1</button>
            <button id='two' value="2" onClick={handleButton}>2</button>
            <button id='three' value="3" onClick={handleButton}>3</button>
            <button className='Operator' id='add' value="+" onClick={handleOperator}>+</button>
          </div>

          <div>
            <button id='zero' className='Zero' value="0" onClick={handleZero}>0</button>
            <button id='decimal' value="." onClick={handleDecimal}>.</button>
            <button className='Operator' id='equals' value="=" onClick={handleEquals}>=</button>
          </div>
        </div>
    </div>
  )
}

export default Calculator;
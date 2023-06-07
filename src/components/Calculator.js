import React from 'react'
import { useState } from 'react'
import './Calculator.css'

function Calculator() {
  const [display, setDisplay] = useState([0]);
  const [decimal, setDecimal] = useState(false);
  const [formula, setFormula] = useState([]);
  const [operator, setOperator] = useState(false);
  const operatorArray = ["+", "-", "*", "/"];
  
  
  const handleClear = () => {
    //resets decimal to false so decimal can be used again
    setDecimal(false);
    setOperator(false);
    setDisplay([0]);
    setFormula([]);
    console.log("AC");
    console.log(formula);
  }
  
  const handleDecimal = (e) => {
    if (!decimal) {
      setFormula(oldArray => [...oldArray, e.target.value]);
      setDisplay(oldArray => [...oldArray, e.target.value]);
      setDecimal(true);
    }
  }

  const handleOperator = (e) => {
    setDecimal(false);
    setOperator(true);
    setDisplay([e.target.value]);
    setFormula(oldArray => [...oldArray, e.target.value]);
    //console.log("operator:, ", decimal);
  }

  const handleZero = (e) => {
      if (display[0] === 0 && e.target.value === "0") {
        //calculator cannot start with multiple zeros
        return;
      } else { 
        if (operator){
          setOperator(false);
          setDisplay([e.target.value]);
          setFormula(oldArray => [...oldArray, e.target.value]);
        } else {
          setDisplay(oldArray => [...oldArray, e.target.value]);
          setFormula(oldArray => [...oldArray, e.target.value]);
        }
    }
  }

  const handleButton = (e) => {
    if (decimal) {
      setDisplay(oldArray => [...oldArray, e.target.value]);
      setFormula(oldArray => [...oldArray, e.target.value]);
      console.log(formula);
    } else {
      if (operator) {
        setOperator(false);
        setDisplay([e.target.value]);
        setFormula(oldArray => [...oldArray, e.target.value]);
        console.log(formula);
      } else {
        if (display[0] === 0) {
          setDisplay([e.target.value]);
          setFormula([e.target.value]);
          console.log(formula);
        } else {
          setDisplay(oldArray => [...oldArray, e.target.value]);
          setFormula(oldArray => [...oldArray, e.target.value]);
          console.log(formula);
        }
      }
    }
  }

  const handleEquals = () => {
    console.log(formula);
    let lastIndex = formula.indexOf(formula[formula.length-1]);
    if (operatorArray.includes(formula[lastIndex])){
      formula.pop();
      let result = parseFloat(eval(formula.join("")).toFixed(7));
      console.log(result);
      setFormula([result]);
      setDisplay([result]);
    } else {
      let result = parseFloat(eval(formula.join("")).toFixed(7));
      console.log(result);
      setFormula([result]);
      setDisplay([result]);
    }
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
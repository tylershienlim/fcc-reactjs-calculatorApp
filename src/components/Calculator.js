import React from 'react'
import './Calculator.css'
import Button from '../reusable/Button';
import LongButton from '../reusable/LongButton';

function Calculator() {
  return (
    <div className='calculatorFrame'>
        <div id='display' className='calculatorDisplay'></div>
        <div className='calculatorButtons'>
          <div>
            <LongButton size='Clear' value="AC">AC</LongButton>
            <Button color='Operator' id='divide' value="÷">÷</Button>
          </div>
          
          <div>
            <Button id='seven' value="7">7</Button>
            <Button id='eight' value="8">8</Button>
            <Button id='nine' value="9">9</Button>
            <Button color='Operator' id='multiply' value="×">×</Button>
          </div>

          <div>
            <Button id='four' value="4">4</Button>
            <Button id='five' value="5">5</Button>
            <Button id='six' value="6">6</Button>
            <Button color='Operator' id='subtract' value="-">-</Button>
          </div>

          <div>
            <Button id='one' value="1">1</Button>
            <Button id='two' value="2">2</Button>
            <Button id='three' value="3">3</Button>
            <Button color='Operator' id='add' value="+">+</Button>
          </div>

          <div>
            <LongButton id='zero' value="0">0</LongButton>
            <Button id='decimal' value=".">.</Button>
            <Button color='Operator' id='equals' value="=">=</Button>
          </div>
        </div>
    </div>
  )
}

export default Calculator;
import React from 'react'
import './Calculator.css'
import Button from '../reusable/Button';
import LongButton from '../reusable/LongButton';

function Calculator() {
  return (
    <div className='calculatorFrame'>
        <div className='calculatorDisplay'></div>
        <div className='calculatorButtons'>
          <div>
            <LongButton size='Clear'>AC</LongButton>
            <Button color='Operator' id='divide'>÷</Button>
          </div>
          
          <div>
            <Button id='seven'>7</Button>
            <Button id='eight'>8</Button>
            <Button id='nine'>9</Button>
            <Button color='Operator' id='multiply'>×</Button>
          </div>

          <div>
            <Button id='four'>4</Button>
            <Button id='five'>5</Button>
            <Button id='six'>6</Button>
            <Button color='Operator' id='subtract'>-</Button>
          </div>

          <div>
            <Button id='one'>1</Button>
            <Button id='two'>2</Button>
            <Button id='three'>3</Button>
            <Button color='Operator' id='add'>+</Button>
          </div>

          <div>
            <LongButton>0</LongButton>
            <Button id='decimal'>.</Button>
            <Button color='Operator' id='equals'>=</Button>
          </div>
        </div>
    </div>
  )
}

export default Calculator;
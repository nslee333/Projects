import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [action, setAction] = useState('');
  const [result, setResult] = useState(0);
 

    // function setState(inputNumber: number) {
    //   if(numberA === 0) {
    //     setNumberA(inputNumber);
    //   } else {
    //     setNumberB(inputNumber);
    //   }
    // }

    // function actionSet(action: string) {
    //   setAction(action);
    // }

    // function calculate() {
    //   if (action === '/') {
    //     const value: number = numberA / numberB;
    //     setResult(value);

    //   } else if (action === '-') {
    //     const value: number = numberA - numberB;
    //     setResult(value);

    //   } else if (action === 'x') {
    //     const value: number = numberA * numberB;
    //     setResult(value);

    //   } else  {
    //     const value: number = numberA + numberB;
    //     setResult(value);

    //   }
    // }

    // function del() {
    //   if (numberB !== 0) {
    //     setNumberB(0);
    //   } else if (numberA !== 0) {
    //     setNumberA(0);
    //   } else if (numberB === 0) {
    //     setResult(0);
    //   }
    // }


    function myComponent() {
      return (
        <div>
          {numberA} {action || '+'} {numberB} {'='} {result}
        </div>
      );
    }

  return (

      <div className='App'>
        <div className='overall'>
          <div className='input-div'>
            {myComponent()}
          </div>
          <div className='btn-div'>
            <button className='btn' onClick={async () => {setState(9)}}>9</button>
            <button className='btn' onClick={async () => {setState(8)}}>8</button>
            <button className='btn' onClick={async () => {setState(7)}}>7</button>
            <button className='btn' onClick={async () => {setState(6)}}>6</button>
            <button className='btn' onClick={async () => {setState(5)}}>5</button>
            <button className='btn' onClick={async () => {setState(4)}}>4</button>
            <button className='btn' onClick={async () => {setState(3)}}>3</button>
            <button className='btn' onClick={async () => {setState(2)}}>2</button>
            <button className='btn' onClick={async () => {setState(1)}}>1</button>
            <button className='btn' onClick={async () => {setState(0)}}>.</button>
            <button className='btn' onClick={async () => {setState(0)}}>0</button>
            <button className='btn' onClick={async () => {del()}}>␡</button>
          </div>
          <div>
            <div className='action-div'>
              <button className='btn-a' onClick={async () => {actionSet('+')}}>+</button>
              <button className='btn-a' onClick={async () => {actionSet('-')}}>-</button>
              <button className='btn-a' onClick={async () => {actionSet('x')}}>x</button>
              <button className='btn-a' onClick={async () => {actionSet('/')}}>/</button>
              <button className='btn-a' onClick={async () => calculate()}>=</button>
            </div>
        </div>
        </div>
      </div>
      
  );
}

export default App;
export {numberA, setNumberA, numberB};

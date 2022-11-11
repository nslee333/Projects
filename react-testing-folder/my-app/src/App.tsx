import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [action, setAction] = useState('');
  const [result, setResult] = useState(0);
  const [actionUsed, setActionUsed] = useState(false);
  const [calculated, setCalculated] = useState(false);

  // console.log(calculated, actionUsed);
  // console.log(numberA, numberB);

 
    const inputArray: string[] = [];

    function setState(inputChar: string) {
      console.log(actionUsed, "Action before");
      
      if (actionUsed === true && numberA === 0) {
        const result: number = parseArray(inputArray);
        setNumberA(result);
        console.log("Scenario 1");

      } else if (calculated === true && numberB === 0) {
        const result: number = parseArray(inputArray);
        setNumberB(result);
        console.log("Scenario 2");

      } else if (actionUsed == false || calculated == false) {
        inputArray.push(inputChar);
        console.log("Scenario 3");
      }
      console.log(inputArray, "Input array");
      // console.log(numberA, numberB, "Number A and B");
      console.log(actionUsed, "action used after");
      // setActionUsed(false);
    }

    function parseArray(inputArray: string[]) {
      console.log(inputArray, "InputArray for parseArray");
      let floatString: string = ""; 
      for (const element in inputArray) {
        floatString += element;
      }
      const result: number = parseFloat(floatString);
      console.log(result, "parseArray Result");
      return result;
    }

    function actionSet(action: string) {
      setAction(action);
      setActionUsed(true);
    }

    // Convert to decimal precise calculations.

    function calculate() {
      if (action === '/') {
        const value: number = numberA / numberB;
        setResult(value);

      } else if (action === '-') {
        const value: number = numberA - numberB;
        setResult(value);

      } else if (action === 'x') {
        const value: number = numberA * numberB;
        setResult(value);

      } else if (action === '+') {
        const value: number = numberA + numberB;
        setResult(value);

      }
    }

    function del() {
      if (numberB !== 0) {
        setNumberB(0);
      } else if (numberA !== 0) {
        setNumberA(0);
      } else if (numberB === 0) {
        setResult(0);
      }
    }


    function myComponent() {
      return(
        <div>
          {numberA} {action} {numberB} {'='} {result}
        </div>
         
        // ) : (
        //   <div></div>
        // )
      );
    }

  return (

      <div className='App'>
        <div className='overall'>
          <div className='input-div'>
            {myComponent()}
          </div>
          <div className='btn-div'>
            <button className='btn' onClick={async () => {setState("9")}}>9</button>
            <button className='btn' onClick={async () => {setState("8")}}>8</button>
            <button className='btn' onClick={async () => {setState("7")}}>7</button>
            <button className='btn' onClick={async () => {setState("6")}}>6</button>
            <button className='btn' onClick={async () => {setState("5")}}>5</button>
            <button className='btn' onClick={async () => {setState("4")}}>4</button>
            <button className='btn' onClick={async () => {setState("3")}}>3</button>
            <button className='btn' onClick={async () => {setState("2")}}>2</button>
            <button className='btn' onClick={async () => {setState("1")}}>1</button>
            <button className='btn' onClick={async () => {setState(".")}}>.</button>
            <button className='btn' onClick={async () => {setState("0")}}>0</button>
            <button className='btn' onClick={async () => {del()}}>␡</button>
          </div>
          <div>
            <div className='action-div'>
              <button className='btn-a' onClick={async () => {actionSet('+'); setActionUsed(true); setState("")}}>+</button>
              <button className='btn-a' onClick={async () => {actionSet('-'); setActionUsed(true); setState("")}}>-</button>
              <button className='btn-a' onClick={async () => {actionSet('x'); setActionUsed(true); setState("")}}>x</button>
              <button className='btn-a' onClick={async () => {actionSet('/'); setActionUsed(true); setState("")}}>/</button>
              <button className='btn-a' onClick={async () => (setCalculated(true), calculate())}>=</button>
            </div>
        </div>
        </div>
      </div>
      
  );
}

export default App;
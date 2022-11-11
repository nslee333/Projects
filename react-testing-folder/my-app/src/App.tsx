import React, { useEffect } from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [action, setAction] = useState('');
  const [result, setResult] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [currentValue, SetCurrentValue] = useState(0);

  
  console.log(inputArray, "Top level");

  useEffect(() => {
    
    console.log("UseEffect log")
    stateCheck();
    const displayArray: number = parseArray(inputArray);
    SetCurrentValue(displayArray);
  

  }, [inputArray, calculated, numberA, numberB, action]);

  function func() {
    const displayArray: number = parseArray(inputArray);
    console.log(displayArray);
  }

    function stateCheck() {
      if (action !== "" && numberA === 0) {
        const result: number = parseArray(inputArray);
        setNumberA(result);
        setInputArray([]);

      } else if (calculated === true && numberB === 0) {
        const result: number = parseArray(inputArray);
        setNumberB(result);
        setInputArray([]);
      }

    }


 

    function setState(inputChar: string) {

      stateCheck();
      console.log(inputArray);

      if (action === "" || calculated == false) {
        inputArray.push(inputChar);
      }
    }



    function parseArray(inputArray: string[]) {
      let floatString: string = inputArray.join("");
      const result: number = parseFloat(floatString);
      return result;
    }




    function actionSet(action: string) {
      setAction(action);
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
          {currentValue || numberA} {action} {numberB} {'='} {result}
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
              <button className='btn-a' onClick={async () => (actionSet('+'))}>+</button>
              <button className='btn-a' onClick={async () => (actionSet('-'))}>-</button>
              <button className='btn-a' onClick={async () => (actionSet('x'))}>x</button>
              <button className='btn-a' onClick={async () => (actionSet('/'))}>/</button>
              <button className='btn-a' onClick={async () => (setCalculated(true), calculate())}>=</button>
            </div>
        </div>
        </div>
      </div>
      
  );
}

export default App;
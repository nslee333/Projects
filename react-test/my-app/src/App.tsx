import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [array, setArray] = useState<string[]>([]);
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [action, setAction] = useState('');
  const [result, setResult] = useState(0);
  const [actionUsed, setActionUsed] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [inputArray, setInputArray] = useState<string[]>([]);

  // console.log(calculated, actionUsed);
  console.log(numberA, numberB);

 
    // const inputArray: string[] = [];

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






  return (
    <div>
      <div className="App">
      <button onClick={async () => (setState("1"))}>Click 1</button>
      <button onClick={async () => (actionSet('+'), setActionUsed(true), setState(""))}>+</button>
    </div>
      <div>
        {array}
      </div>
    </div>
  );
}

export default App;

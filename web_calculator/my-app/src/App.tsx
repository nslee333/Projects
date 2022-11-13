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
  const [displayNumber, setDisplayNumber] = useState(0);
  const [btnPress, setBtnPress] = useState(false);
  const [historyArray, setHistoryArray] = useState<string[]>([]);


  useEffect(() => {
    stateCheck();
    setBtnPress(false);
    displayArray();

    if (calculated === true) {
      calculate();
      stateCheck();
    }

    addToHistory();

  }, [btnPress, calculated, numberA, numberB, action, result]);


  function displayArray() {
    const value: number = parseArray(inputArray);
    setDisplayNumber(value);
  }

  function clearAll() {
    setNumberA(0);
    setNumberB(0);
    setResult(0);
    setInputArray([]);
    setHistoryArray([]);
    setCalculated(false);
    setAction("");
    setDisplayNumber(0)
  }

    function stateCheck() {
      displayArray();

      if (action !== "" && numberA === 0) {
        const result: number = parseArray(inputArray);
        setNumberA(result);
        setInputArray([]);

      } else if (calculated == true && numberB === 0) {
        const result: number = parseArray(inputArray);
        setNumberB(result);
        setInputArray([]);
      }
    }

    function setState(inputChar: string) {
      stateCheck();

      if (action === "" || calculated == false) {
        inputArray.push(inputChar);
      }
    }

    

    function parseArray(inputArray: string[]) {
      let floatString: string = inputArray.join("");

      if (inputArray.length === 0) {
        inputArray.push("0");
      }

      const result: number = parseFloat(floatString);
      return result;
    }

    function actionSet(action: string) {
      if (result === 0) {
        setAction(action);

      } else if (result !== 0) {
        setNumberA(result);
        setAction(action);
        setNumberB(0);
        setResult(0);
        setCalculated(false);
      }
    }

    function evalCalculate() {
      if (numberA !== 0 && displayNumber !== 0) {
        setCalculated(true);
      }
    }

    function calculate() {
        if (action === '/') {
          const value: number = numberA / numberB;
          const roundedValue: number = parseFloat(value.toFixed(15));
          setResult(roundedValue);

        } else if (action === '-') {
          const value: number = numberA - numberB;
          const roundedValue: number = parseFloat(value.toFixed(15));
          setResult(roundedValue);

        } else if (action === 'x') {
          const value: number = numberA * numberB;
          const roundedValue: number = parseFloat(value.toFixed(15));
          setResult(roundedValue);

        } else if (action === '+') {
          const value: number = numberA + numberB;
          const roundedValue: number = parseFloat(value.toFixed(15));
          setResult(roundedValue);

        }
    }

    function addToHistory() {
      const entry: string = `${numberA} ${action} ${numberB} = ${result}`

      if (result !== 0 && (historyArray[historyArray.length - 1] !== entry && numberA != result)) {
        historyArray.unshift(entry);
      }
    }

    function del() {
      if (numberA == 0 && numberB == 0) {
        inputArray.pop();
        displayArray();

      } else {

        if (result !== 0) {
        setCalculated(false);
        setResult(0);
  
        } else if (numberB !== 0) {
          const result = deleteOneChar(numberB);
          setNumberB(result);

        } else if (numberA !== 0 && displayNumber !== 0) {
          inputArray.pop();
          displayArray();
          
        } else if (numberB === 0 && action !== "") {
          setAction("");
        
        } else if (numberA !== 0) {
          setAction("");
          const result = deleteOneChar(numberA);
          setNumberA(result);
        }
      }
    }
  
    function deleteOneChar(inputNumber: number) {
      const floatString: string = `${inputNumber}`;
      const splitArray: string[] = floatString.split("");
  
      splitArray.pop();
      if (splitArray.length === 0) {
        splitArray.push("0");
      }
  
      const arrayString: string = splitArray.join("");
      const result: number = parseFloat(arrayString);
  
      return result;
    }

    function displayHistory() {
      return (
        historyArray[2] !== "" ? 
        (
          <div className='history-div'>
            { historyArray[2] } 
            <br/>
            { historyArray[1] }
            <br/>
            { historyArray[0] }
           </div>
        ) 
        : historyArray[1] !== "" ? 
        (
          <div className='history-div'>
            { historyArray[1] }
            <br/>
            { historyArray[0] }
          </div>
        ) 
        : historyArray[0] !== "" ? 
        (
          <div className='history-div'>
            { historyArray[0] }
          </div>
        ):(
          <div></div>
        )
      );
    }

    function displayCalculation() {
      return (
        numberA === 0 ? (
          <div>
            {displayNumber || ""} 
          </div>
        ) : numberB === 0 ? (
          <div>
            {numberA} {action || ""} {numberB || displayNumber || ""} 
          </div>
        ) : result === 0 ? (
          <div>
            {numberA} {action} {numberB}
          </div>
        ) : (
          <div>
            {numberA} {action} {numberB} = {result}
          </div>
        )
      );
    }

  return (

      <div className='App'>
        <div className='overall'>
          <div className='parent-history-div'>
            {displayHistory()}
          </div>
          <div className='calculation-div'>
            {displayCalculation()}
          </div>
          <div className='number-btn-div'>
            <button className='number-btn' onClick={async () => (setState("9"), setBtnPress(true))}>9</button>
            <button className='number-btn' onClick={async () => (setState("8"), setBtnPress(true))}>8</button>
            <button className='number-btn' onClick={async () => (setState("7"), setBtnPress(true))}>7</button>
            <button className='number-btn' onClick={async () => (setState("6"), setBtnPress(true))}>6</button>
            <button className='number-btn' onClick={async () => (setState("5"), setBtnPress(true))}>5</button>
            <button className='number-btn' onClick={async () => (setState("4"), setBtnPress(true))}>4</button>
            <button className='number-btn' onClick={async () => (setState("3"), setBtnPress(true))}>3</button>
            <button className='number-btn' onClick={async () => (setState("2"), setBtnPress(true))}>2</button>
            <button className='number-btn' onClick={async () => (setState("1"), setBtnPress(true))}>1</button>
            <button className='number-btn' onClick={async () => (setState("."), setBtnPress(true))}>.</button>
            <button className='number-btn' onClick={async () => (setState("0"), setBtnPress(true))}>0</button>
            <button className='number-btn' onClick={async () => {del()}}>␡</button>
          </div>
          <div>
            <div className='action-btn-div'>
              <button className='action-btn' onClick={async () => (actionSet('+'))}>+</button>
              <button className='action-btn' onClick={async () => (actionSet('-'))}>-</button>
              <button className='action-btn' onClick={async () => (actionSet('x'))}>x</button>
              <button className='action-btn' onClick={async () => (actionSet('/'))}>/</button>

              <button className='action-btn' onClick={async () => (evalCalculate())}>=</button>

              <button className='action-btn' onClick={async () => (clearAll())}>Clear</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
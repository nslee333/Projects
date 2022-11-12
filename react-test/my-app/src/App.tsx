import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [result, setResult] = useState(0);
  const [action, setAction] = useState(false);
  const [actionValue, setActionValue] = useState('');
  const [calculated, setCalculated] = useState(false);

  // console.log(numberA, numberB, "NumberA, NumberB");
  // console.log(actionValue, calculated, "aV, c")


  useEffect(() => {
    stateCheck();
    console.log(numberA, numberB, inputArray);
    setAction(false);
  }, [action, actionValue, calculated])

  
  function process(inputNumber: string) {
    stateCheck();
      if (actionValue === "" || calculated === false) {
        inputArray.push(inputNumber);
      }
  }

  function stateCheck() {
    console.log(actionValue, calculated, "aV, c @ statecheck")

    if (actionValue !== "" && numberA === 0) {
      const result: number = parseArray(inputArray);
      setNumberA(result);
      setInputArray([]);

    } else if (actionValue !== "" && calculated === true) {
      const result: number = parseArray(inputArray);
      setNumberB(result);
      setInputArray([]);
    }

  }

  function parseArray(array: string[]) {
    const arrayString: string = array.join("");
    const finalResult: number = parseFloat(arrayString);
    return finalResult;
  }

  function del() {
    if (result !== 0) {
      setResult(0);

    } else if (numberB !== 0) {
      const result = deleteOneChar(numberB);
      setNumberB(result);
      
    } else if (numberA !== 0) {
      setActionValue("");
      const result = deleteOneChar(numberA);
      setNumberA(result);
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

  function clear() {
    setResult(0);
    setNumberB(0);
    setNumberA(0);
    setActionValue("");
    setCalculated(false);
  }

  function setActionChar(inputValue: string) {
    setActionValue(inputValue);
  }

  function calculate() {
    if (actionValue === '+') {
      const result: number = numberA + numberB;
      setResult(result);

    } else if (actionValue === '-') {
      const result: number = numberA - numberB;
      setResult(result);

    } else if (actionValue === 'x') {
      const result: number = numberA * numberB;
      setResult(result);

    } else if (actionValue === '/') {
      const result: number = numberA / numberB;
      setResult(result);
    }

    console.log(result);
    setCalculated(true);
  }


  function myComponent() {
    return (
      <div>
        {numberA}
        |
        {actionValue}
        |
        {numberB}
        |
        {result}
      </div>
    );
  };




  return (
    <>
      <div className="App">
      <button className='btn' onClick={async () => (process("1"))}>1</button>
      <button className='btn' onClick={async () => (process("2"))}>2</button>
      <button className='btn' onClick={async () => (process("3"))}>3</button>
      <button className='btn' onClick={async () => (process("4"))}>4</button>
      <button className='btn' onClick={async () => (process("5"))}>5</button>
      <button className='btn' onClick={async () => (process("6"))}>6</button>
      <button className='btn' onClick={async () => (process("7"))}>7</button>
      <button className='btn' onClick={async () => (process("8"))}>8</button>
      <button className='btn' onClick={async () => (process("9"))}>9</button>
      <button className='btn' onClick={async () => (process("0"))}>0</button>
      <button className='btn' onClick={async () => (process("."))}>.</button>
      <button className='btn' onClick={async () => (setActionChar("X"))}>x</button>
      <button className='btn' onClick={async () => (setActionChar("/"))}>/</button>
      <button className='btn' onClick={async () => (setActionChar("+"))}>+</button>
      <button className='btn' onClick={async () => (setActionChar("-"))}>-</button>
      <button className='btn' onClick={async () => (calculate())}>=</button>
      <button className='btn' onClick={async () => (del())}>delete</button>
      <button className='btn' onClick={async () => (clear())}>clear all</button>
    </div>
      <div>
        {myComponent()}
      </div>
    </>
  );
}

export default App;

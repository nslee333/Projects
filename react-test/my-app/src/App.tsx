import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [numberA, setNumberA] = useState(0);
  const [numberb, setNumberB] = useState(0);
  const [action, setAction] = useState(false);
  const [actionValue, setActionValue] = useState('');


  useEffect(() => {
    process("");
  }, [action])

  
  function process(inputNumber: string) {
    console.log(inputNumber);
    if (action === true) {
      const result: number = parseArray(inputArray);
      setNumberA(result);
      console.log(result);
    } else {
      inputArray.push(inputNumber);
      console.log(inputNumber);
    }
  }

  function parseArray(array: string[]) {
    const arrayString: string = array.join("");
    const finalResult: number = parseFloat(arrayString);
    return finalResult;
  }

  function del() {
    const floatString: string = `${numberA}`;
    const splitArray: string[] = floatString.split("");
    console.log(splitArray);

    splitArray.pop();
    if (splitArray.length === 0) {
      splitArray.push("0");
    }
    const arrayString: string = splitArray.join("");
    const result: number = parseFloat(arrayString);
    
    setNumberA(result);

  }

  function setActionChar(inputValue: string) {
    setActionValue(inputValue);
  }

  function calculate() {

  }


  function myComponent() {
    return (
      <div>
        {numberA}
        {inputArray}
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
      <button className='btn' onClick={async () => (setAction(true))}>=</button>
      <button className='btn' onClick={async () => (del())}>delete</button>
    </div>
      <div>
        {myComponent()}
      </div>
    </>
  );
}

export default App;

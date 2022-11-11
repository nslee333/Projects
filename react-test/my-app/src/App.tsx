import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [numberA, setNumberA] = useState(0);

  function addOne() {
    inputArray.push("1");
    inputArray.push(".")
    console.log(inputArray);
    arrayToNumber();
  }

  function arrayToNumber() {
    const value: string = inputArray.join("");
    const valueNumber: number = parseFloat(value);
    setNumberA(valueNumber);
  }

  useEffect(() => {
    console.log("UseEffect log");
    arrayToNumber();
  }, [addOne])


  function myComponent() {
    return (
      {inputArray}
    );
  };




  return (
    <>
      <div className="App">
      <button onClick={async () => (addOne())}>Click 1</button>
      <button onClick={async () => (addOne())}>+</button>
    </div>
      <div>
        {numberA}
      </div>
    </>
  );
}

export default App;

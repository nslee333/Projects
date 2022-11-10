import {numberA, numberB} from './App.js';

function setState(inputNumber: number) {
    if(numberA === 0) {
      setNumberA(inputNumber);
    } else {
      setNumberB(inputNumber);
    }
  }

  function actionSet(action: string) {
    setAction(action);
  }

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

    } else  {
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








export {};
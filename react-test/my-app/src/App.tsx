import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  function calc() {
    const result1: number = 555 * 555;
    return {result1, result2}
  }


  function myComponent() {

      return (
        <div>
          {}
        </div>
      );

  }



  return (
    <>
      <div>
        {myComponent()}
      </div>
    </>
  );
}

export default App;

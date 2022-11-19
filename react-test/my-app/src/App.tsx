import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

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

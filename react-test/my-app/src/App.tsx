import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [array, setArray] = useState<string[]>([]);

  array.push("| 2.25 x 6 = ?? |", "| 2.22 x 4242 = ?? |", "||", "||");

  function addToArray() {

  }

  function iterArray() {
    
  }



  function myComponent() {

      return (
        <div>
          {array.map(array => <ul>{array}</ul>)}
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

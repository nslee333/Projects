import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {


  const [total, setTotal] = useState(0);

  // Set up a component / hook for state.

  //
  
  
  
  return (
      <div>
          <div className='input-div'>
            <input placeholder='123' type='text' className='input'></input>
          </div>
          <div className='btn-div'>
            <button className='btn'>9</button>
            <button className='btn'>8</button>
            <button className='btn'>7</button>
            <button className='btn'>6</button>
            <button className='btn'>5</button>
            <button className='btn'>4</button>
            <button className='btn'>3</button>
            <button className='btn'>2</button>
            <button className='btn'>1</button>
            <button className='btn'>.</button>
            <button className='btn'>0</button>
            <button className='btn'>␡</button>
          </div>
          <div>
            <div className='action-div'>
              <button className='btn-a'>+</button>
              <button className='btn-a'>-</button>
              <button className='btn-a'>x</button>
              <button className='btn-a'>/</button>
              <button className='btn-a'>=</button>
            </div>
        </div>
        <footer className='footer'>Made by Nathan Lee</footer>
      </div>
  );
}

export default App;

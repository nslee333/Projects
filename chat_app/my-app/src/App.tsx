import React, { useEffect } from 'react';
import {useState} from 'react';
import './App.css';

function App() {  

  function chat_window() {
    return (
      <div className='chat-window'>
        <div className='chat-messages-window'>
          // Display current messages
        </div>
        <input type='text' placeholder='Enter a message' className='input-message' />
        <button className='send-btn'>Send</button>
      </div>
    );
  }





  return (
    <div className="App">
      <div>
        {chat_window()}
      </div>
    </div>
  );
}

export default App;

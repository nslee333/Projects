import React from 'react';
import './App.css';



function chat_window() {
  return (
    <div className='chat-window-parent'>
      Hello World
      <div className='chat-input-bar'>
        <div className='chat-input-div'>
          <input placeholder='send a message' className='chat-input'></input>
        </div>
        <button className='chat-btn'>Send</button>
      </div>
    </div>
  );
}









function App() {
  return (
    <div className="App">
      <div>{chat_window()}</div>
    </div>
  );
}

export default App;

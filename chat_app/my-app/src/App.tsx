import React from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [messagesArray, setMessagesArray] = useState<string[]>([]);

  const sendMessage = (event: any) => {
    // const message: string = 'chat-input'.value;
    console.log(event.target.value)
    messagesArray.push(event.target.value);
  }
  
  
  
  function chat_window() {
    return (
      <div className='chat-window-parent'>
        Hello World
        <div className='chat-input-bar'>
          <div className='chat-input-div'>
            <input type='text' placeholder='send a message' className='chat-input' form='chat' onChange={sendMessage}/>
          </div>
          <button className='chat-btn' form='chat' onClick={sendMessage}>Button</button>
        </div>
      </div>
    );
  }
  





  return (
    <div className="App">
      <div>{chat_window()}</div>
    </div>
  );
}

export default App;

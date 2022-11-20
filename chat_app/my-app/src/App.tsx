import React, { useEffect } from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [messagesArray, setMessagesArray] = useState<string[]>([]);
  const [draft, setDraft] = useState<string>('');
  
  useEffect(() => {
    // document.addEventListener('keydown', detectKeyDown, true);
  }, [])

  const detectKeyDown = (e: any) => {
    document.addEventListener('keydown')
    console.log(e.key)
  }
  
  
  
  function chat_window() {
    return (
      <div className='chat-window-parent'>
        Hello World
        <div className='chat-input-bar'>
          <div className='chat-input-div'>
            <input type='text' placeholder='send a message' className='chat-input'  onChange={detectKeyDown}/>
          </div>
          {/* <button className='chat-btn' onClick={}>Send</button> */}
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

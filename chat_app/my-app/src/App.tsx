import React, { useEffect } from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const [messagesArray, setMessagesArray] = useState<string[]>([]);
  const [draft, setDraft] = useState<string>('');
  const [theme, setTheme] = useState(false);
  
  useEffect(() => {
    // document.addEventListener('keydown', detectKeyDown, true);
  }, [])

  // const detectKeyDown = (e: any) => {
  //   document.addEventListener('keydown')
  //   console.log(e.key)
  // }
  
  
  
  function chat_window() {
    return (
      <div className='chat-window-parent'>
        Hello World
        <div className='chat-input-bar'>
          <div className='chat-input-div'>
            <input type='text' placeholder='send a message' className='chat-input' />
          </div>
          {/* <button className='chat-btn' onClick={}>Send</button> */}
        </div>
      </div>
    );
  }

  const toggleTheme = () => {
    
  }

  function viewMode() {
    return (
      <div>
        <button className='toggle-theme' onClick={toggleTheme}>ON|Off</button>
      </div>
    );
  }
  





  return (
    <div className="App">
      <div>{viewMode()}</div>
      <div>{chat_window()}</div>
    </div>
  );
}

export default App;

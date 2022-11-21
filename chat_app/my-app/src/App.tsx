import React, { useEffect } from 'react';
import {useState, useRef} from 'react';
import './App.css';

function App() {  
  const [draft, setDraft] = useState("");

  const ref = useRef('messageInput');
  console.log(draft, "'Draft'");

  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === 'Enter') {
        // Might need to add a [&& inputValue !== ""] to make sure it only submits a text chat. 
        setDraft(event.target.value);
        
        // const messageInput: HTMLElement | null = document.getElementById('messageInput');
        // messageInput.value = '';
      }
    }

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }

  })

  const handleSubmit = (event: any) => {
    
  }

  

  function chat_window() {
    return (
      <div className='chat-window'>
        <div className='chat-messages-window'>
          // Display current messages
        </div>
        <form>

          <input
            placeholder='Enter a message' 
            className='input-message'
            />
            <button type='button' name='message' className='send-btn' onClick={async () => (setDraft(), )}>Send</button>
          </form>
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

import React, { useEffect } from 'react';
import {useState, useRef} from 'react';
import './App.css';

function App() {  
  const [draft, setDraft] = useState("");

  const ref = useRef('messageInput');
  console.log(draft, "'Draft'");

  useEffect(() => {


    const keyDownHandler = (event: any) => {
      if (event.key === 'Enter' && event.target.value !== "") {
        // Might need to add a [&& inputValue !== ""] to make sure it only submits a text chat. 
        event.preventDefault();
        setDraft(event.target.value);
        event.target.value = null;
        
        // const messageInput: HTMLElement | null = document.getElementById('messageInput');
        // messageInput.value = '';
      }
    }

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }

  }, )

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setDraft(event.target.value);
    console.log(draft)
    
    event.target.value = null;
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
            // onChange={(e) => setDraft(e.target.value)}
            />
            <button type='submit' className='send-btn' disabled={!draft} onClick={e => handleSubmit(e)}>Send</button>
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

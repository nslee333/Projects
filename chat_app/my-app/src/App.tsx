import {useState, useEffect} from 'react';
import './App.css';

function App() {  
  const [draft, setDraft] = useState("");


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("handleSubmit call")
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
            onChange={e => setDraft(e.target.value)}
            />
            <button type='submit' className='send-btn' onClick={async (e) => handleSubmit(e)}>Send</button>
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

import './App.css';

function App() {







  function taskWindow() {
    return (
      <div>
        <div>
          <input type='text' className='taskInput'/>
        </div>
        <div className='taskBox'>
          // Display current tasks here
        </div>
      </div>
    );
  }











  return (
    <div className="App">
      {taskWindow()}
    </div>
  );
}

export default App;

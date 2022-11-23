import './App.css';

function App() {







  function taskWindow() {
    return (
      <div>
        <input type='text' className='taskInput'/>
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

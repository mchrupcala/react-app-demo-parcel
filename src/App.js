import './App.css';
import { useState } from 'react';
import { readGetterFromAbi, setNewGetterFromAbi } from './contracts/utils/utils';

function App() {
  const [greeterValue, setGreeterValue] = useState(null);
  
  const readGreeter = async () => {
    const res = await readGetterFromAbi();
    setGreeterValue(res);
  };

  const setNewGreeter = async () => {
    const greeterText = document.getElementById('greeter-text').value;

    try {
      await setNewGetterFromAbi(greeterText);
      readGreeter();
    } catch (err) {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="App">
      
      <form>
        <div id="greeter-label">
          <label>New Greeter text:</label>
          <input type="text" id="greeter-text"/>
        </div>

        <div>
          <button type="button" id="read-greeter" onClick={() => readGreeter()}>Read Greeter</button>
          <button type="button" id="new-greeter" onClick={() => setNewGreeter()}>Set New Greeter</button>
        </div>

        {greeterValue ? <p>{greeterValue}</p> : null}
      </form>
    </div>
  );
}

export default App;

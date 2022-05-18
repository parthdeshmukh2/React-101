import logo from './logo.svg';
import './App.css';
import Counter from './Counter/Counter';
import { useState } from 'react';

function App() {
  const [toggle, setToggle]= useState(false);
  return (
    <div className="App">
      <button>Toggle</button>
     <Counter/>
    </div>
  );
}

export default App;

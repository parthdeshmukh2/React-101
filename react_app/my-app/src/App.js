
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import ToDoList from './TodoItem';
import ProductsFetch from './ProductsFetch';

function App() {
  const [todo, srtTodo] = useState([]);
  return (
    <div className="App">
        {/* <ToDoList todos={todo} setTodo={srtTodo}/> */}
        <ProductsFetch/>
    </div>
  );
}

export default App;

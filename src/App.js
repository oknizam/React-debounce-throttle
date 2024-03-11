import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Todo from './components/Todo';

function App() {


  // debounce
  const handleChange = e => {
    console.log("api call-->", e)
  }

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay)
    }
  }

  // throttling

  const throttling = (func, delay) => {
    let run = false;
    return function (...args) {
      if (!run) {
        func(...args);
        run = true;
        setTimeout(() => run = false, delay)
      }
    }
  }

  const handleMouseMove = e => {
    console.log("mouse movement", e)
  }

  useEffect(()=>{
    // window.addEventListener("mousemove", throttling(handleMouseMove, 5000));
  },[])



  return (
    <div className="App">
      <h3>Debouncing</h3>
      <input type='text' onChange={debounce(handleChange, 500)} />
      <Todo/>
    </div>
  );
}

export default App;

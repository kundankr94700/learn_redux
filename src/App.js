import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from './Action';

function App() {
  //
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>counter {counter}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        {isLogged?<h3></h3>:" "}
      </header>
    </div>
  );
}

export default App;

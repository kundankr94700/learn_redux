import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'

let store=createStore(counter)
const increment=()=>{
  return {
    type:"INCREMENT"
  }
}
const decrement=()=>{
  return{
    type:"DECREMENT"

  }
}
const counter=(state=0,action)=>{
  switch(action.type){
    case "INCREMENT":
      return state+1
      case "DECREMENT":
        return state-1
  }
}
//store
let store=createStore(counter) /// to displayour counter in the console window
store.subscribe(()=>console.log(store.getState()));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(crement());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, toggleLoggedInState } from './components/actions/root.action';

import './App.css';


function ReduxApp() {

  const counter = useSelector(state => state.counter);
  const loggedIn = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))} className="btn btn-primary">+</button>
      <button onClick={() => dispatch(decrement())} className="btn btn-primary">-</button>

      <br />

      {loggedIn ? <h3>This message should only be displayed if you are logged in. </h3> : <h3>Welcome</h3>}

      <input type="button" value={loggedIn ? "Logout" : "Login"} className="btn btn-primary" onClick={() => dispatch(toggleLoggedInState())} />
    </div>
  );
}

export default ReduxApp;

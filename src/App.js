import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Switch>

    </div>
  );
}

export default App;

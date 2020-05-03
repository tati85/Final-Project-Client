import React from 'react';
import './App.css';
import logo from './logo.svg';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import MyLoginFormPage from "./components/Login/MyLogin";



function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path='/' component={MyLoginFormPage} />
        <Route exact path='/home' component={Home} />
      </Switch>


    </div>
  );
}
export default App;

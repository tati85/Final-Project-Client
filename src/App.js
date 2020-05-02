import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </Layout>

    </div>
  );
}

export default App;

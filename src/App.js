import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Home from './components/Home/Home';
import MyProfile from './components/UserProfile/Profile'
import { Switch } from 'react-router-dom';
import MyLoginFormPage from "./components/Landing/MyLogin";
import Dashboard from './components/Transactions/DashboardTransactions';





class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path='/' component={MyLoginFormPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={MyProfile} />


        </div>
      </Provider>

    );

  }

}
export default App;

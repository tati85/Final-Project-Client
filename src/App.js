import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import './App.css';
import Home from './components/Home/Home';
import MyProfile from './components/UserProfile/Profile';
import MyLoginFormPage from "./components/Landing/MyLogin";



const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/' component={MyLoginFormPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={MyProfile} />
      </Provider>
    );

  }

}
export default App;

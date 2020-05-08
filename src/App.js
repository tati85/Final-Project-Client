import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import MyLoginFormPage from "./components/Landing/MyLogin";



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">

            <Switch>
              <Route exact path='/' component={MyLoginFormPage} />
              <Route exact path='/home' component={Home} />
            </Switch>

          </div>

        </Router>


      </Provider>

    );

  }

}
export default App;

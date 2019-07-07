import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import AppRouter from '../routers/AppRouter';
import Navigation from "../containers/Navigation";
import LinearProgress from "../components/LinearProgress";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../stores";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);


class App extends Component {
  render() {    
    return (
      <ReduxProvider store={reduxStore}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Redux + MaterialUI Starter Template</h2>
        </div>
        <LinearProgress className="Progress"/>

        <AppRouter> 
          <Navigation />
        </AppRouter>
         
             
      </div>
      </ReduxProvider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage'
import PhotoPage from './pages/PhotoPage/PhotoPage'
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route path='/photos' render={() => <PhotoPage />} />
        </Switch>
      </div>
    )
  }
}


export default App;

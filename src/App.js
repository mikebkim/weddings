import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

// Pages
import HomePage from './pages/HomePage/HomePage'
import PhotoPage from './pages/PhotoPage/PhotoPage'
import RegistryPage from './pages/RegistryPage/RegistryPage';
import GuestBookPage from './pages/GuestBookPage/GuestBookPage';

// Components
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <HomePage />} />
          <Route path='/photos' render={() => <PhotoPage />} />
          <Route path='/registry' render={() => <RegistryPage />} />
          <Route path='/guestbook' render={() => <GuestBookPage />} />
        </Switch>
      </div>
    )
  }
}


export default App;

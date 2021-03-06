import React from 'react';
import './App.css';

import RoomsContainer from './components/RoomsContainer'
import GameContainer from './components/GameContainer'

import { Route } from "react-router-dom";
import SignupContainer from './components/SignupContainer';
import LoginContainer from './components/LoginContainer'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>

        <div>
          <Route path="/rooms/:id" exact component={GameContainer} />
          <Route path="/" exact component={SignupContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/rooms" exact component={RoomsContainer} />
        </div>
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Game from './components/Game'
import Signup from './components/Signup';
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice game</h1>
      </header>
      <main>
        <Signup/>
        <Login/>
        <Game/>
      </main>
    </div>
  );
}

export default App;

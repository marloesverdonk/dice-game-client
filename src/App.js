import React from 'react';
import './App.css';
import Rooms from './components/Rooms'
import Signup from './components/Signup';
import Login from './components/Login'
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
      <div>
        <Link to="/"> Sign up </Link>
        <Link to="/login"> Login</Link>
      
        <Route path="/" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/rooms" exact component={Rooms} />
      </div>
      </main>
    </div>
  );
}

export default App;

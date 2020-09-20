import React from 'react';
import './App.css';
import Home from './components/home/home';
import { Route } from 'react-router-dom';
import Login from './components/login/login';
import Logged from './components/logged/logged';

function App() {
  return (
    <div className="App">

      <Route path = '/' strict exact component = { Home } />

      <Route path = '/login' strict exact component = { Login } />

      <Route path = '/logged' strict exact component = { Logged } />

    </div>
  );
}

export default App;

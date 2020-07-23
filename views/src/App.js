import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import { withNamespaces } from 'react-i18next';

function App({t}) {


  return (
      <Router>
        <div className="App">
          <Route exact path="/"><Home /></Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/admin">
            <p>'hello'</p>
          </Route>
        </div>
      </Router>
  );
}

export default withNamespaces()(App);

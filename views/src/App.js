import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import AuthContext from './AuthContext';
import Home from './components/Home';

import { withNamespaces } from 'react-i18next';

function App({t}) {
  const [token, setToken] = useState(localStorage.getItem('authToken'))
  const [id, setId] = useState(localStorage.getItem('id'))
  const [name, setName] = useState(localStorage.getItem('name'))

  const setTokenInLocalStorage = (token) => {
    localStorage.setItem('authToken', token)
    setToken(token)
  }

  const setIdInLocalStorage = (id) => {
    localStorage.setItem('id', id)
    setId(id)
  }

  const setNameInLocalStorage = (name) => {
    localStorage.setItem('name', name)
    setName(name)
  }

  let userNameFromToken = null
  if (token) {
    userNameFromToken = jwtDecode(token).name || null
  }

  return (
    <AuthContext.Provider value={{token, setToken: setTokenInLocalStorage, id, setId: setIdInLocalStorage, name, setName: setNameInLocalStorage}}>
      <Router>
        <div className="App">
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/"><Home /></Route>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default withNamespaces()(App);

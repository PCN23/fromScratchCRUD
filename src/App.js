import React from 'react';
import { useState } from 'react';
import { client } from './services/client';
import { logout } from './services/fetch-utils';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import ListPage from './ListPage';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';



export default function App() {
  const [user, setUser] = useState();


  async function handleLogoutClick() {
    await logout();
    // now change state
    setUser('');

  }


  return (
    <Router>
      <div>
        <nav>
          <ul>
            
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/create">Create new movie</Link>
            </li>
            <li>
              <Link to="/movie/1">update movie</Link>
            </li>
            <li>
              <Link to="/movies">Movie list</Link>
            </li>
            <li>
              {user && 
              <button onClick={handleLogoutClick}>logout</button>}
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* protect this route */}
          <Route exact path="/">
            { 
              !user ? <AuthPage setUser={setUser} /> 
                : <Redirect to="/movies" />
            }
          </Route>
          <Route exact path="/movies"> 
            {
              user ? <ListPage /> : <Redirect to="/" />
            }
          </Route>
          <Route exact path="/create/:id">
            <UpdatePage /> 
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

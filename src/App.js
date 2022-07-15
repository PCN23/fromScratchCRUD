import React from 'react';
import { useState } from 'react';
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

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create new movie watchlist.</Link>
            </li>
            <li>
              <Link to="/movies/1">Update movie list</Link>
            </li>
            <li>
              <Link to="/movies"> movie list</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              !user
                ? <AuthPage setUser={setUser} /> 
                : <Redirect to="/movies" />

            }
          </Route>
          <Route exact path="/movies">
            <ListPage />
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/movies/:id">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

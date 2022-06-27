import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import AuthPage from './AuthPage';
import UpdatePage from './UpdatePage';
import CreatePage from './CreatePage';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/create">Add Movie comment</Link>
            </li>
            <li>
              <Link to="/movie/1">update movie</Link>
            </li>
            <li>
              <Link to="/movies">Movie list</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/movies">
            <ListPage />
          </Route>
          <Route exact path="/create/id">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
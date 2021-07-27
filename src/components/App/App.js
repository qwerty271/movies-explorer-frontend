import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound.js';
//для коммита

function App() {
  return (
    <React.Fragment>
      <div className='page'>
        <Switch>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;

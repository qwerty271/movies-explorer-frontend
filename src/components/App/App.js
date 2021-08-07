import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [popup, setPopup] = React.useState(false);
  const [statePreloader, setStatePreloader] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      api
        .getUser()
        .then((data) => {
          setCurrentUser(data);
          setLoggedIn(true);
        })
        .catch((err) => console.log(err));
    } else if (!jwt) {
      setLoggedIn(false);
    }
  }, [history]);

  function userRegister(name, email, password) {
    setStatePreloader(true);
    api
      .register(name, email, password)
      .then((res) => {
        if (res) {
          setStatePreloader(false);
          userLogin(email, password);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function userLogin(email, password) {
    setStatePreloader(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setStatePreloader(false);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function replaceUser(name, email) {
    setStatePreloader(true);
    api
      .replaceUser(name, email)
      .then((res) => {
        setStatePreloader(false);
        setCurrentUser(res);
        setPopup(true);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setPopup(false);
    }, [1500]);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Main type={loggedIn} />
          </Route>
          <Route path='/signin'>
            <Login userLogin={userLogin} statePreloader={statePreloader} />
          </Route>
          <Route path='/signup'>
            <Register
              userRegister={userRegister}
              statePreloader={statePreloader}
            />
          </Route>
          <ProtectedRoute
            path='/profile'
            type={loggedIn}
            component={Profile}
            userData={currentUser}
            loggedIn={setLoggedIn}
            submit={replaceUser}
            popup={popup}
            statePreloader={statePreloader}
          />
          <ProtectedRoute path='/movies' type={loggedIn} component={Movies} />
          <ProtectedRoute
            path='/saved-movies'
            type={loggedIn}
            component={SavedMovies}
          />

          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

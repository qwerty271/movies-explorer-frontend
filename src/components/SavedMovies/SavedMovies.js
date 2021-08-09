import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { api } from '../../utils/MainApi';
import { searchFilter, shortFilter } from '../DataFilter/DataFilter';

function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = React.useState();
  const [getedFilms, setGetedFilms] = React.useState();
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    if (!savedMovies) {
      api
        .getMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err));
    }
  });

  function getBeatfilmMovies(ref, check) {
    setGetedFilms(searchFilter(ref, savedMovies, check));
  }

  function getted() {
    if (check && !getedFilms) {
      return shortFilter(savedMovies, true);
    } else if (!check && !getedFilms) {
      return savedMovies;
    } else if (getedFilms && !check) {
      return getedFilms;
    } else if (!check && !getedFilms) {
      return savedMovies;
    } else if (check && getedFilms) {
      return shortFilter(getedFilms, true);
    }
  }

  return (
    <section className='saved-movies'>
      <Header type={props.type} />
      <SearchForm
        submit={getBeatfilmMovies}
        check={check}
        type={'savedMovies'}
        setSavedMovies={setSavedMovies}
        savedMovies={savedMovies}
        setCheck={setCheck}
        getedFilms={getedFilms}
      />
      <MoviesCardList
        button={'saved'}
        moreVisible={true}
        savedMovies={getted()}
        savedMoviesFull={savedMovies}
        getedFilms={getedFilms}
        page={'savedMovies'}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;

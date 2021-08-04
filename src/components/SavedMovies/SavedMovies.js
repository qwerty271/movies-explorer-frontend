import React from 'react';
import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { api } from '../../utils/MainApi';
import { searchFilter } from '../DataFilter/DataFilter';

function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = React.useState();
  const [shortFilms, setshortFilms] = React.useState();
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
    api
      .getMovies()
      .then((savedMovies) => {
        setSavedMovies(searchFilter(ref, savedMovies, check));
      })
      .catch((err) => console.log(err));
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
        setshortFilms={setshortFilms}
      />
      <MoviesCardList
        button={'saved'}
        moreVisible={true}
        savedMovies={check ? shortFilms : savedMovies}
      />
      <Footer />
    </section>
  );
}

export default SavedMovies;

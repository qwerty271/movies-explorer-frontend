import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import { moviesApi } from '../../utils/MoviesApi.js';
import Preloader from './Preloader/Preloader.js';
import { searchFilter, baseFilter } from '../DataFilter/DataFilter';
import { api } from '../../utils/MainApi';

function Movies(props) {
  const [dataFilms, setDataFilms] = React.useState();
  const [dataInput, setDataInput] = React.useState();
  const [check, setCheck] = React.useState(false);
  const [statePreloader, setStatePreloader] = React.useState(false);
  const [filteredArray, setFilteredArray] = React.useState();
  const [renderedArray, setRenderedArray] = React.useState();
  const [savedMovies, setSavedMovies] = React.useState();

  React.useEffect(() => {
    if (!savedMovies) {
      api
        .getMovies()
        .then((movies) => {
          setSavedMovies(movies);
          localStorage.setItem('savedStorage', JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  });

  function getBeatfilmMovies(ref, check) {
    if (!dataFilms) {
      setStatePreloader(true);
      moviesApi
        .getBeatfilmMovies()
        .then((data) => {
          setDataFilms(data);
          setDataInput(ref);
          setFilteredArray(searchFilter(ref, data, check));
          localStorage.setItem(
            'moviesStorage',
            JSON.stringify(searchFilter(ref, data, check))
          );
          localStorage.setItem('inputStorage', JSON.stringify(ref));
          localStorage.setItem('checkStorage', JSON.stringify(check));
          setRenderedArray(baseFilter(searchFilter(ref, data, check)));
          setStatePreloader(false);
        })
        .catch((err) => console.log(err));
    } else if (dataFilms) {
      setDataInput(ref);
      setFilteredArray(searchFilter(ref, dataFilms, check));
      localStorage.setItem(
        'moviesStorage',
        JSON.stringify(searchFilter(ref, dataFilms, check))
      );
      localStorage.setItem('inputStorage', JSON.stringify(ref));
      localStorage.setItem('checkStorage', JSON.stringify(check));
      setRenderedArray(baseFilter(searchFilter(ref, dataFilms, check)));
    }
    if (!savedMovies) {
      api
        .getMovies()
        .then((movies) => {
          setSavedMovies(movies);
          localStorage.setItem('savedStorage', JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
    setCheck(check);
  }

  return (
    <React.Fragment>
      <Header type={props.type} />
      <SearchForm
        submit={getBeatfilmMovies}
        button={'search'}
        dataFilms={dataFilms}
        dataInput={dataInput}
        check={check}
        setCheck={setCheck}
        filteredArray={filteredArray}
        renderedArray={renderedArray}
        setFilteredArray={setFilteredArray}
        setRenderedArray={setRenderedArray}
        type={'movies'}
      />
      <MoviesCardList
        button={'search'}
        dataFilms={dataFilms}
        dataInput={dataInput}
        check={check}
        filteredArray={filteredArray}
        renderedArray={renderedArray}
        setFilteredArray={setFilteredArray}
        setRenderedArray={setRenderedArray}
        setDataInput={setDataInput}
        setCheck={setCheck}
        savedMoviesFull={savedMovies}
        setSavedMovies={setSavedMovies}
        setDataFilms={setDataFilms}
        page={'movies'}
      />
      <Footer />
      <Preloader state={statePreloader} />
    </React.Fragment>
  );
}
export default Movies;

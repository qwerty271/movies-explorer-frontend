import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import { moviesApi } from '../../utils/MoviesApi.js';
import Preloader from './Preloader/Preloader.js';
import { searchFilter, baseFilter } from '../DataFilter/DataFilter';

function Movies(props) {
  const [dataFilms, setDataFilms] = React.useState();
  const [dataInput, setDataInput] = React.useState();
  const [check, setCheck] = React.useState(false);
  const [statePreloader, setStatePreloader] = React.useState(false);
  const [filteredArray, setFilteredArray] = React.useState();
  const [renderedArray, setRenderedArray] = React.useState();

  function getBeatfilmMovies(ref, check) {
    if (!dataFilms) {
      setStatePreloader(true);
      moviesApi
        .getBeatfilmMovies()
        .then((data) => {
          setDataFilms(data);
          setDataInput(ref);
          setFilteredArray(searchFilter(ref, data, check));
          setRenderedArray(baseFilter(searchFilter(ref, data, check)));
          setStatePreloader(false);
        })
        .catch((err) => console.log(err));
    } else if (dataFilms) {
      setDataInput(ref);
      setFilteredArray(searchFilter(ref, dataFilms, check));
      setRenderedArray(baseFilter(searchFilter(ref, dataFilms, check)));
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
        check={setCheck}
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
      />
      <Footer />
      <Preloader state={statePreloader} />
    </React.Fragment>
  );
}
export default Movies;

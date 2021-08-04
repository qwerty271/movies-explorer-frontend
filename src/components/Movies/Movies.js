import React from 'react';
import SearchForm from './SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';

function Movies() {
  return (
    <React.Fragment>
      <Header type={2} />
      <SearchForm />
      <MoviesCardList button={'search'} />
      <Footer />
    </React.Fragment>
  );
}
export default Movies;

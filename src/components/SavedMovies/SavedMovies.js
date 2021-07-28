import './SavedMovies.css';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

function SavedMovies() {
  return (
    <section className='saved-movies'>
      <Header type={2} />
      <SearchForm />
      <MoviesCardList button={'saved'} />
      <Footer />
    </section>
  );
}

export default SavedMovies;

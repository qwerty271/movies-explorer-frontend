import React from 'react';
import './MoviesCardList.css';
import {
  baseFilter,
  moreFilter,
  searchFilter,
} from '../../DataFilter/DataFilter';
import MoviesCard from '../MoviesCard/MoviesCard';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MoviesCardList(props) {
  const userData = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (props.filteredArray) {
      searchFilter(props.dataInput, props.dataFilms, props.check);
      baseFilter(props.filteredArray);
    }
    if (
      !props.filteredArray &&
      !props.renderedArray &&
      props.page === 'movies' &&
      localStorage.getItem('moviesStorage')
    ) {
      if (JSON.parse(localStorage.getItem('moviesStorage')).length !== 0) {
        props.setRenderedArray(
          baseFilter(JSON.parse(localStorage.getItem('moviesStorage')))
        );
        props.setFilteredArray(
          JSON.parse(localStorage.getItem('moviesStorage'))
        );
        props.setDataInput(JSON.parse(localStorage.getItem('inputStorage')));
        props.setCheck(JSON.parse(localStorage.getItem('checkStorage')));
      }
    }
  });

  function more() {
    if (props.filteredArray.length !== props.renderedArray.length) {
      props.setRenderedArray(
        props.renderedArray.concat(
          moreFilter(props.filteredArray, props.renderedArray)
        )
      );
    }
  }

  return (
    <section className='card-list'>
      <p
        className={`card-list__notice ${
          props.filteredArray
            ? props.filteredArray.length === 0
              ? 'card-list__notice_active'
              : ''
            : ''
        } ${
          props.getedFilms
            ? props.getedFilms.length === 0
              ? 'card-list__notice_active'
              : ''
            : ''
        }`}
      >
        Ничего не найдено
      </p>
      <div className='card-list__contain' id={'contain'}>
        {props.renderedArray
          ? props.renderedArray.map((card) => {
              return (
                <MoviesCard
                  key={card.id}
                  movieId={card.id}
                  button={props.button}
                  title={card.nameRU}
                  duration={card.duration}
                  preview={'https://api.nomoreparties.co' + card.image.url}
                  link={card.trailerLink}
                  country={card.country}
                  director={card.director}
                  year={card.year}
                  description={card.description}
                  thumbnail={
                    'https://api.nomoreparties.co' +
                    card.image.formats.thumbnail.url
                  }
                  nameEN={card.nameEN}
                  savedMoviesFull={
                    !props.dataFilms && localStorage.getItem('savedStorage')
                      ? JSON.parse(localStorage.getItem('savedStorage'))
                      : props.savedMoviesFull
                  }
                />
              );
            })
          : null}
        {props.savedMovies
          ? props.savedMovies.map((movie) => {
              if (movie.owner === userData._id) {
                return (
                  <MoviesCard
                    key={movie._id}
                    movieId={movie._id}
                    button={props.button}
                    title={movie.nameRU}
                    duration={movie.duration}
                    preview={movie.image}
                    link={movie.trailer}
                    country={movie.country}
                    director={movie.director}
                    year={movie.year}
                    description={movie.description}
                    thumbnail={movie.thumbnail.url}
                    nameEN={movie.nameEN}
                    savedMoviesFull={props.savedMoviesFull}
                  />
                );
              } else {
                return null;
              }
            })
          : null}
      </div>
      <button
        className={`card-list__more ${
          props.moreVisible ? 'card-list__more_inactive' : ''
        } ${
          props.filteredArray && props.renderedArray
            ? props.filteredArray.length === props.renderedArray.length
              ? 'card-list__more_inactive'
              : ''
            : ''
        }
        ${!props.renderedArray ? 'card-list__more_inactive' : ''} 
        `}
        onClick={more}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;

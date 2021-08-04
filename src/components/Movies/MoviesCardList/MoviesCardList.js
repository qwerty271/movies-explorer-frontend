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
  }, [props.check, props]);

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
        ${!props.renderedArray ? 'card-list__more_inactive' : ''}`}
        onClick={more}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;

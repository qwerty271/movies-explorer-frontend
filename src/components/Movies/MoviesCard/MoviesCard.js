import React from 'react';
import './MoviesCard.css';
import { api } from '../../../utils/MainApi';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';

function MoviesCard(props) {
  const [favoritesCheck, setFavoritesCheck] = React.useState(false);
  const [id, setId] = React.useState();
  const [hidden, setHidden] = React.useState(true);
  const changeButton = props.button;
  const userData = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api
      .getMovies()
      .then((movies) => {
        matched(movies);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function matched(movies) {
    for (let i = 0; i < movies.length; i++) {
      if (
        movies[i].movieId === props.movieId &&
        userData._id === movies[i].owner
      ) {
        setFavoritesCheck(true);
        setId(movies[i]._id);
        break;
      }
    }
  }

  function change() {
    if (!favoritesCheck) {
      api
        .createMovie(
          props.country,
          props.director,
          props.duration,
          props.year,
          props.description,
          props.preview,
          props.link,
          props.thumbnail,
          props.movieId,
          props.title,
          props.nameEN
        )
        .then((res) => {
          setFavoritesCheck(true);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .deleteMovie(id)
        .then((res) => {
          setFavoritesCheck(false);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function formattedDuration() {
    const hours = Math.floor(props.duration / 60);
    const minutes =
      Math.floor(props.duration) - Math.floor(props.duration / 60) * 60;
    const formatted =
      hours.toString() + 'ч ' + minutes.toString().padStart(2, '0') + 'м';
    return formatted;
  }

  function deleteCard() {
    api
      .deleteMovie(props.movieId)
      .then((res) => {
        setHidden(false);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className={`movies-card ${!hidden ? 'movies-card__inactive' : ''}`}>
      <div className='movies-card__top'>
        <ul className='movies-card__list'>
          <li className='movies-card__item'>
            <h2 className='movies-card__title'>{props.title}</h2>
          </li>
          <li className='movies-card__item'>
            <p className='movies-card__duration'>{formattedDuration()}</p>
          </li>
        </ul>
        <button
          className={` movies-card__options ${
            favoritesCheck && changeButton === 'search'
              ? 'movies-card__favorites_active'
              : 'movies-card__favorites'
          } ${changeButton === 'saved' ? 'movies-card__delete' : ''}`}
          onClick={changeButton === 'search' ? change : deleteCard}
        />
      </div>
      <a
        className='movies-card__link'
        href={props.link}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='movies-card__preview'
          alt='Превью'
          src={props.preview}
        />
      </a>
    </div>
  );
}

export default MoviesCard;

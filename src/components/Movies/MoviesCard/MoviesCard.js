import React from 'react';
import './MoviesCard.css';
import cardPreview from '../../../images/card_preview.png';

function MoviesCard(props) {
  const [favoritesCheck, setFavoritesCheck] = React.useState(false);
  const changeButton = props.button;

  function change() {
    setFavoritesCheck(favoritesCheck ? false : true);
  }

  function deleteCard() {}

  return (
    <div className='movies-card'>
      <div className='movies-card__top'>
        <ul className='movies-card__list'>
          <li className='movies-card__item'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
          </li>
          <li className='movies-card__item'>
            <p className='movies-card__duration'>1ч 47м</p>
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
      <img className='movies-card__preview' alt='Превью' src={cardPreview} />
    </div>
  );
}

export default MoviesCard;

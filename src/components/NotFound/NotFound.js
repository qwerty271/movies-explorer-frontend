import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__description'>Страница не найдена</p>
      <button
        className='not-found__link'
        type='button'
        onClick={history.goBack}
      >
        Назад
      </button>
    </section>
  );
}

export default NotFound;

import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList(props) {
  return (
    <section className='card-list'>
      <div className='card-list__contain'>
        <MoviesCard button={props.button} />
        <MoviesCard button={props.button} />
        <MoviesCard button={props.button} />
      </div>
      {/* <Preloader /> */}
      <button className='card-list__more'>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
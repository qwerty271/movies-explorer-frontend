import React from 'react';
import './SearchForm.css';
import {
  searchFilter,
  baseFilter,
  shortFilter,
} from '../../DataFilter/DataFilter';

function SearchForm(props) {
  const filmRef = React.useRef();

  function changeCheck() {
    if (props.type === 'movies') {
      props.check === true ? props.setCheck(false) : props.setCheck(true);
      if (!props.dataFilms && localStorage.getItem('moviesStorage')) {
        props.setRenderedArray(
          baseFilter(
            shortFilter(
              JSON.parse(localStorage.getItem('moviesStorage')),
              !props.check
            )
          )
        );
        props.setFilteredArray(
          searchFilter(
            props.dataInput,
            JSON.parse(localStorage.getItem('moviesStorage')),
            !props.check
          )
        );
      } else {
        if (props.filteredArray) {
          props.setFilteredArray(
            searchFilter(props.dataInput, props.dataFilms, !props.check)
          );
          props.setRenderedArray(
            baseFilter(
              searchFilter(props.dataInput, props.dataFilms, !props.check)
            )
          );
        } else if (props.renderArray) {
          props.setFilteredArray(
            searchFilter(props.dataInput, props.dataFilms, !props.check)
          );
          props.setRenderedArray(
            baseFilter(
              searchFilter(props.dataInput, props.dataFilms, props.check)
            )
          );
        }
      }
    } else if (props.type === 'savedMovies') {
      props.check === true ? props.setCheck(false) : props.setCheck(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submit(filmRef.current.value, props.check);
  }

  return (
    <section className='search-form'>
      <form className='search-form__field' onSubmit={handleSubmit}>
        <input
          className='search-form__input'
          placeholder='Фильм'
          ref={filmRef}
          // value={!props.dataFilms ? props.dataInput : ''}
          required
        ></input>
        <button className='search-form__button' type='submit'></button>
      </form>
      <div className='search-form__contain'>
        <p className='search-form__text'>Короткометражки</p>
        <label className='search-form__switch'>
          <input
            className='search-form__checkbox'
            type='checkbox'
            id='checkbox'
            onClick={changeCheck}
            checked={props.check ? true : false}
            readOnly
          />
          <span className='slider round'></span>
        </label>
      </div>
      <hr className='search-form__line' />
    </section>
  );
}

export default SearchForm;

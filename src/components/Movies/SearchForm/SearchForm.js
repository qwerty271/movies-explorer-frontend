import React from 'react';
import './SearchForm.css';
import { searchFilter, baseFilter } from '../../DataFilter/DataFilter';

function SearchForm(props) {
  const filmRef = React.useRef();
  const [check, setCheck] = React.useState(false);

  function changeCheck() {
    check === true ? setCheck(false) : setCheck(true);
    if (props.type === 'movies') {
      if (props.filteredArray) {
        props.setFilteredArray(
          searchFilter(props.dataInput, props.dataFilms, !check)
        );
        props.setRenderedArray(
          baseFilter(searchFilter(props.dataInput, props.dataFilms, !check))
        );
      } else if (props.renderArray) {
        props.setFilteredArray(
          searchFilter(props.dataInput, props.dataFilms, !check)
        );
        props.setRenderedArray(
          baseFilter(searchFilter(props.dataInput, props.dataFilms, check))
        );
      }
    } else if (props.type === 'savedMovies') {
      props.check === true ? props.setCheck(false) : props.setCheck(true);
      props.setshortFilms(searchFilter(' ', props.savedMovies, !check));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.submit(filmRef.current.value, check);
  }

  return (
    <section className='search-form'>
      <form className='search-form__field' onSubmit={handleSubmit}>
        <input
          className='search-form__input'
          placeholder='Фильм'
          ref={filmRef}
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
          />
          <span className='slider round'></span>
        </label>
      </div>
      <hr className='search-form__line' />
    </section>
  );
}

export default SearchForm;

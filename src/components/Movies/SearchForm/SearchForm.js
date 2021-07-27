import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__field'>
        <input className='search-form__input' placeholder='Фильм'></input>
        <button className='search-form__button' type='submit'></button>
      </form>
      <div className='search-form__contain'>
        <p className='search-form__text'>Короткометражки</p>
        <label className='search-form__switch'>
          <input className='search-form__checkbox' type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div>
      <hr className='search-form__line' />
    </section>
  );
}

export default SearchForm;

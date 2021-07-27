import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';

function Form(props) {
  const changeInput = props.input;
  const formTitle = props.title;
  const fieldsButton = props.button;
  const register = props.register;
  const sign = props.sign;
  const route = props.route;

  return (
    <section className='form'>
      <Link to='/' className='form__logo'>
        <img src={logo} alt='логотип' className='form__logo_img' />
      </Link>
      <h2 className='form__title'>{formTitle}</h2>
      <form className='fields' noValidate>
        <p
          className={`fields__title ${
            changeInput === 'register' ? '' : 'fields__title_inactive'
          }`}
        >
          Имя
        </p>
        <input
          className={`fields__input ${
            changeInput === 'register' ? '' : 'fields__input_inactive'
          }`}
          type='text'
          minLength='2'
          maxLength='40'
          placeholder='Имя'
          required
        ></input>
        <span className='fields__input-error fields__input_name-error'></span>
        <p className='fields__title'>E-mail</p>
        <input
          className='fields__input'
          type='email'
          placeholder='E-mail'
          required
        ></input>
        <span className='fields__input-error fields__input_email-error'></span>
        <p className='fields__title'>Пароль</p>
        <input
          className='fields__input fields__input_password'
          type='password'
          placeholder='Пароль'
          required
        ></input>
        <span className='fields__input-error fields__input_password-error'>
          Что-то пошло не так...
        </span>
        <button
          className={`fields__button ${
            changeInput === 'register' ? '' : 'fields__button_login'
          }`}
          type='submit'
        >
          {fieldsButton}
        </button>
      </form>
      <ul className='form__list'>
        <li className='form__item'>{register}</li>

        <li className='form__item'>
          <Link to={`/${route}`} className='form__link'>
            {sign}
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Form;

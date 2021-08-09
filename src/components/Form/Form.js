import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';
import { Formik } from 'formik';

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

      <Formik
        initialValues={
          props.route === 'signin'
            ? { name: '', email: '', password: '' }
            : { email: '', password: '' }
        }
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Это обязательное поле';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Неверный формат почты';
          }
          if (props.route === 'signin') {
            if (!values.name) {
              errors.name = 'Это обязательное поле';
            } else if (/[^A-Za-zА-Яа-я -]/i.test(values.name)) {
              errors.name = 'Недопустимый символ';
            } else if (values.name.length < 2) {
              errors.name = 'Слишком короткое имя';
            } else if (values.name.length > 40) {
              errors.name = 'Слишком длинное имя';
            }
          }

          if (!values.password) {
            errors.password = 'Это обязательное поле';
          }
          return errors;
        }}
        onSubmit={(values, { setStatus }) => {
          props.route === 'signin'
            ? props.submit(values.name, values.email, values.password)
            : props.submit(values.email, values.password);
          setStatus('Что-то пошло не так...');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          status,
        }) => (
          <form className='fields' onSubmit={handleSubmit}>
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
              } ${
                errors.name && touched.name && errors.name
                  ? 'fields__input-error'
                  : ''
              }`}
              type='text'
              name='name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder='Имя'
            ></input>
            <span className='fields__span-error'>
              {errors.name && touched.name && errors.name}
            </span>

            <p className='fields__title'>E-mail</p>
            <input
              className={`fields__input ${
                errors.email && touched.email && errors.email
                  ? 'fields__input-error'
                  : ''
              }`}
              type='email'
              placeholder='E-mail'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
            <span className='fields__span-error'>
              {errors.email && touched.email && errors.email}
            </span>

            <p className='fields__title'>Пароль</p>
            <input
              className={`fields__input ${
                errors.password && touched.password && errors.password
                  ? 'fields__input-error'
                  : ''
              }`}
              type='password'
              placeholder='Пароль'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            ></input>
            <span className='fields__span-error'>
              {errors.password && touched.password && errors.password
                ? errors.password && touched.password && errors.password
                : status
                ? status
                : ''}
            </span>

            <button
              className={`fields__button ${
                changeInput === 'register' ? '' : 'fields__button_login'
              } ${
                (errors.name && touched.name && errors.name) ||
                (errors.email && touched.email && errors.email) ||
                (errors.password && touched.password && errors.password)
                  ? 'fields__button_inactive'
                  : ''
              } ${
                props.route === 'signin'
                  ? touched.name && touched.email && touched.password
                    ? ''
                    : 'fields__button_inactive'
                  : touched.email && touched.password
                  ? ''
                  : 'fields__button_inactive'
              }`}
              type='submit'
              disabled={`${
                (errors.name && touched.name && errors.name) ||
                (errors.email && touched.email && errors.email) ||
                (errors.password && touched.password && errors.password)
                  ? 'disabled'
                  : ''
              }`}
            >
              {fieldsButton}
            </button>
          </form>
        )}
      </Formik>
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

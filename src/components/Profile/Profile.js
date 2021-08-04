import React from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { api } from '../../utils/MainApi';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import Preloader from '../Movies/Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const userData = React.useContext(CurrentUserContext);
  const history = useHistory();

  function logout() {
    api
      .logout()
      .then((res) => {
        props.loggedIn(false);
        history.push('/');
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <React.Fragment>
      <Header type={props.type} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, {userData.name}</h2>
        <Formik
          initialValues={{
            name: '' || userData.name,
            email: userData.email,
          }}
          enableReinitialize={true}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = 'Это обязательное поле';
            } else if (/[^A-Za-zА-Яа-я -]/i.test(values.name)) {
              errors.name = 'Недопустимый символ';
            } else if (values.name.length < 2) {
              errors.name = 'Слишком короткое имя';
            } else if (values.name.length > 40) {
              errors.name = 'Слишком длинное имя';
            }

            return errors;
          }}
          onSubmit={(values) => {
            props.submit(values.name, values.email);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className='fields' onSubmit={handleSubmit}>
              <div className='profile__contain'>
                <div className='profile__contain_data'>
                  <p className='profile__header'>Имя</p>
                  <input
                    className='profile__input'
                    type='text'
                    name='name'
                    onBlur={handleBlur}
                    value={values.name || ''}
                    onChange={handleChange}
                  ></input>
                </div>
                <span className='profile__span-error'>
                  {errors.name && touched.name && errors.name}
                </span>
                <hr className='profile__line' />
                <div className='profile__contain_data'>
                  <p className='profile__header'>Email</p>
                  <input
                    className='profile__input'
                    type='text'
                    value={values.email || ''}
                    disabled
                  ></input>
                </div>
              </div>
              <ul className='profile__list'>
                <li className='profile__item'>
                  <button
                    className={`profile__button ${
                      (values.name === userData.name && touched.name) ||
                      errors.name
                        ? 'profile__button_inactive'
                        : ''
                    }`}
                    type='submit'
                    disabled={`${
                      values.name === userData.name ? 'disabled' : ''
                    }`}
                  >
                    Редактировать
                  </button>
                </li>
                <li className='profile__item' onClick={logout}>
                  Выйти из аккаунта
                </li>
              </ul>
            </form>
          )}
        </Formik>
        <div className={`popup ${props.popup ? 'popup__active' : ''}`}>
          <p className={`popup__text`}>Данные успешно обновлены</p>
        </div>
      </section>
      <Preloader state={props.statePreloader} />
    </React.Fragment>
  );
}

export default Profile;

import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
  const name = 'Алексей';
  const email = 'pochta@yandex.ru';
  return (
    <React.Fragment>
      <Header type={2} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, {name}</h2>
        <div className='profile__contain'>
          <div className='profile__contain_data'>
            <p className='profile__header'>Имя</p>
            <input
              className='profile__input'
              type='text'
              value={name}
              readOnly
            ></input>
          </div>
          <hr className='profile__line' />
          <div className='profile__contain_data'>
            <p className='profile__header'>Email</p>
            <input
              className='profile__input'
              type='text'
              value={email}
              readOnly
            ></input>
          </div>
        </div>
        <ul className='profile__list'>
          <li className='profile__item'>Редактировать</li>
          <li className='profile__item'>Выйти из аккаунта</li>
        </ul>
      </section>
    </React.Fragment>
  );
}

export default Profile;

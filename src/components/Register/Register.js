import React from 'react';
import './Register.css';
import Form from '../Form/Form';
import Preloader from '../Movies/Preloader/Preloader';

function Register(props) {
  return (
    <section className='register'>
      <Form
        input={'register'}
        title={'Добро пожаловать!'}
        button={'Зарегистрироваться'}
        register={'Уже зарегистрированы?'}
        sign={'Войти'}
        route={'signin'}
        submit={props.userRegister}
      />
      <Preloader state={props.statePreloader} />
    </section>
  );
}

export default Register;
